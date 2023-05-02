import React from "react";

export const machineMessages = {
  home: {
    source: "machine",
    message: (
      <p>
        Hi, I'm Tim. I'm a Senior studying Computer Science and Engineering at
        Santa Clara University. I am a former Amazon Software Development
        Engineer Intern and former Tech Lead of{" "}
        <a href="https://human-id.org/">humanID</a>, a non-profit startup backed
        by Harvard Business School and Mozilla. What would you like to know
        about me?
      </p>
    ),
    backMessage: "What else would you like to know about me?",
    clickableMessages: ["Resume", "Projects"],
    leaf: false,
  },
  Resume: {
    source: "machine",
    message:
      "What part of my resume would you like to know about? Or do you want to know about something else?",
    backMessage: "Is there part of my resume would you like to know about?",
    clickableMessages: ["Education", "Work", "Projects", "Something Else"],
    leaf: false,
    backSelection: "Something Else",
  },
  Education: {
    source: "machine",
    message:
      "I am studying for a B.S. in Computer Science and Engineering at Santa Clara University expecting to graduate in June 2023. I have 3.85/4.0 GPA and am a part of the Tai Beta Pi Honors Society and the University Honors Program. Is there part of my resume would you like to know about?",
    leaf: true,
  },
  Work: {
    source: "machine",
    message:
      "What work experience would you like to learn about? Or would you like to learn about a different part of my resume?",
    clickableMessages: [
      "SDE intern at Amazon",
      "Tech Lead at humanID",
      "SWE intern at humanID",
      "SWE intern at Dakota Systems",
      "A Different Part",
    ],
    leaf: false,
    backSelection: "A Different Part",
  },
  SDE_intern_at_Amazon: {
    source: "machine",
    message: (
      <>
        <p>
          <bold>Amazon</bold>, Virtual <br></br> Software Development Engineer
          Intern | Jun 2022 - Sep 2022
        </p>
        <ul>
          <li>
            Architected a full stack CMS solution for content on the Amazon
            Relay platform.
          </li>
          <li>
            Leveraged React.js and Typescript to build a dynamic and intuitive
            front end user experience.
          </li>
          <li>
            Utilized a Sprint Boot MVC with AWS services including Lambda,
            DynamoDB, and IAM as a backend.
          </li>
        </ul>
      </>
    ),

    leaf: true,
  },
  Tech_Lead_at_humanID: {
    source: "machine",
    message: (
      <>
        <p>
          <bold>humanID</bold>, Virtual <br></br>
          Tech Lead | Aug 2021 - Mar 2022
        </p>
        <ul>
          <li>
            Direct a team of 15+ developers utilizing effective delegation and
            collaboration techniques.
          </li>
          <li>
            Groom backlog by measuring impact and cost to choose the most
            valuable projects for each sprint.
          </li>
          <li>
            Spearhead tech team vision to consistently align with key
            performance indicators and company values.
          </li>
        </ul>
      </>
    ),
    leaf: true,
  },
  SWE_intern_at_humanID: {
    source: "machine",
    message: (
      <>
        <p>
          <bold>humanID</bold>, Virtual <br></br>
          Software Developer Intern | Feb 2021 - Aug 2021
        </p>
        <ul>
          <li>
            Cooperated with product managers in 3 week-long sprints to maximize
            performance.
          </li>
          <li>
            Wrote clear and concise documentation for 2 tools to empower
            collaboration through GitHub.
          </li>
          <li>
            Developed front end user interface elements from a spec sheet
            utilizing HTML, CSS, and JavaScript.
          </li>
        </ul>
      </>
    ),
    leaf: true,
  },
  SWE_intern_at_Dakota_Systems: {
    source: "machine",
    message: (
      <>
        <p>
          <bold>Dakota Systems</bold>, Chicago, IL<br></br>
          Software Developer Intern | Jun 2018 - Sep 2018{" "}
        </p>
        <ul>
          <li>
            Designed new product elements using AWS Rekognition and Instagram
            API.{" "}
          </li>
          <li>
            Authored highly maintainable code in python for an AWS system.{" "}
          </li>
          <li>
            Compiled data from 5 Instagram Accounts for statistical analysis in
            Python.{" "}
          </li>
        </ul>
      </>
    ),
    leaf: true,
  },
  Projects: {
    source: "machine",
    message: "Which project would you like to learn about?",
    backMessage:
      "Is there another project you would like to learn about? Or something else?",
    clickableMessages: [
      "Chat With Me",
      "SlideNotes",
      "OpenCV Mask Detection",
      "Motivational Twitter Bot",
      "JSAT Iris Classifier",
      "JavaFX Paint",
      "Black Jack Machine Learning",
      "Something Else",
    ],
    backSelection: "Something Else",
    leaf: false,
  },
  Chat_With_Me: {
    source: "machine",
    message: (
      <p>
        This is the simple chat bot you are currently talking to that uses GPT-3
        to guide the user through a conversation with predefined responses. This
        is done by having GPT-3 guess the selection of the user based on their
        input. The code is available{" "}
        <a href="https://github.com/timhradil/chat-with-me">here</a>.
      </p>
    ),
    leaf: true,
  },
  SlideNotes: {
    source: "machine",
    message: (
      <p>
        This web app allows a user to upload a .pptx presentation and receive
        custom created notes using openAI gpt-3. React.js is used for the
        frontend and the backend is built using SAM CLI with components
        including Lambda, DynamoDB, S3, SQS, API Gateway, and Cloudwatch. Check
        it out <a href="https://www.slidenotes.dev/">here</a> and the code is
        available <a href="https://github.com/timhradil/slidenotes">here</a>. Is
        there another project you would like to learn about? Or something else?
      </p>
    ),
    leaf: true,
  },
  OpenCV_Mask_Detection: {
    source: "machine",
    message: (
      <p>
        This program uses a users webcam in order to determine whether or not
        they are wearing a mask. It does this with a custom trained cascade
        classifier (cascade.xml) using training data available online. There is
        a video demo down below and the code is available on github{" "}
        <a href="https://github.com/timhradil/OpenCV-Mask-Detection">here</a>.
        Is there another project you would like to learn about? Or something
        else?
        <iframe
          width="100%"
          height="400px"
          src="https://www.youtube.com/embed/zzuGfZE9v1s"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
        ></iframe>
      </p>
    ),
    leaf: true,
  },
  Motivational_Twitter_Bot: {
    source: "machine",
    message: (
      <p>
        This is a bot written in Java that pulls a motivational quote from
        quotes.rest and then tweets it using Twitter4j. This will not work
        without tokens; however, it is available on github{" "}
        <a href="https://github.com/timhradil/Motivational-Twitter-Bot-No-Tokens">
          here
        </a>
        . Is there another project you would like to learn about? Or something
        else?
      </p>
    ),
    leaf: true,
  },
  JSAT_Iris_Classifier: {
    source: "machine",
    message: (
      <p>
        This is a very simple classifier of the Iris data set using JSAT. The
        data is downloaded, briefly analyzed, then a Naive Bayes classifier is
        trained and evaluated. This project’s code is available on github{" "}
        <a href="https://github.com/timhradil/JSAT-Iris-Classifier">here</a> or
        can be previewed below through repl.it. Is there another project you
        would like to learn about? Or something else?
        <iframe
          title="JSAT Iris Classifier Demo"
          frameborder="0"
          width="100%"
          height="400px"
          src="https://replit.com/@TimHradil/JSAT-Iris-Classifier?embed=true"
        ></iframe>
      </p>
    ),
    leaf: true,
  },
  JavaFX_Paint: {
    source: "machine",
    message: (
      <p>
        This is a simple paint program written using JavaFX. This will not work
        without special JavaFX plugins; however, it is available on github{" "}
        <a href="https://github.com/timhradil/Javafx-Paint">here</a>. Is there
        another project you would like to learn about? Or something else?
      </p>
    ),
    leaf: true,
  },
  Black_Jack_Machine_Learning: {
    source: "machine",
    message: (
      <p>
        This program uses a reinforcement based learning algorithm to teach the
        computer to play black jack. The first line gives the percentage change
        that the computer will hit on the number given in the second line. The
        third line, in order, shows the number of the last 100 games won, the
        percent of the last 10000 games won, and the percent of the first 10000
        games won. The fourth line shows the percent growth in games won. This
        project is available on github{" "}
        <a href="https://github.com/timhradil/Black-Jack-Machine-Learning">
          here
        </a>{" "}
        or can be preview below through repl.it. Is there another project you
        would like to learn about? Or something else?
        <iframe
          title="Black Jack Machine Learning Demo"
          frameborder="0"
          width="100%"
          height="400px"
          src="https://replit.com/@TimHradil/Black-Jack-Machine-Learning?embed=true"
        ></iframe>
      </p>
    ),
    leaf: true,
  },
  Unknown: {
    source: "machine",
    message:
      "Sorry, I am not sure which option you are trying to pick. Please click the option, or rephrase your message.",
    leaf: true,
  },
};
