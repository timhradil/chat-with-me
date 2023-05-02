export default function getUserSelection(
  options,
  message,
  handleSelectionCallback
) {
  var url =
    "https://fkq2dnkuz3.execute-api.us-west-2.amazonaws.com/Stage/getUserSelection/";
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      options: options,
      message: message,
    }),
  };
  fetch(url, requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Error");
    })
    .then((data) => {
      handleSelectionCallback(data["selection"]);
    });
}
