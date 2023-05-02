import json
import openai
import boto3


def getOpenAPIKey():
    secret_name = "OpenAIKey"
    region_name = "us-west-2"
    session = boto3.session.Session()
    client = session.client(
        service_name='secretsmanager',
        region_name=region_name
    )

    get_secret_value_response = client.get_secret_value(
        SecretId=secret_name
    )

    return json.loads(get_secret_value_response['SecretString'])['Secret Key']


def lambda_handler(event, context):
    openai.api_key = getOpenAPIKey()

    requestBody = json.loads(event['body'])
    options = requestBody['options']
    message = requestBody['message']

    response = openai.Completion.create(
        model="text-davinci-003",
        prompt="User options: " +
        str(options)+" \n\nInstructions: If the user message does not match any of the options then respond 'Unknown'. Only respond with just the option name from the user options list\n\nUser: "+message+"\n\nResponse:",
        suffix="",
        temperature=0,
        max_tokens=256,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )

    selection = response['choices'][0]['text'].strip()
    if selection not in options:
        selection = 'Unknown'

    return {
        "statusCode": 200,
        "headers": {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        "body": json.dumps({
            "selection": selection,
        }),
    }
