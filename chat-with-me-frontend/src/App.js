import React from "react";
import "./App.css";
import { machineMessages } from "./data/machineMessages";
import getUserSelection from "./helpers/getUserSelection";
import ChatInput from "./components/chatInput/ChatInput";
import Messages from "./components/messages/Messages";

function App() {
  const [path, setPath] = React.useState(["home"]);
  const [messages, setMessages] = React.useState([
    {
      ...machineMessages[path[0]],
    },
  ]);

  const handleSelection = React.useCallback(
    (selection) => {
      console.log(selection);
      var newPath = path;
      if (
        selection ===
        machineMessages[path.at(-1).replaceAll(" ", "_")].backSelection
      )
        newPath = path.toSpliced(-1);
      else newPath = [...path, selection];
      var machineMessage = machineMessages;
      machineMessage = machineMessage[newPath.at(-1).replaceAll(" ", "_")];
      if (
        selection ===
        machineMessages[path.at(-1).replaceAll(" ", "_")].backSelection
      )
        machineMessage.message = machineMessage.backMessage;
      if (!machineMessage.leaf) setPath(newPath);
      else machineMessage.clickableMessages = messages[1].clickableMessages;
      setMessages([machineMessage, ...messages]);
    },
    [messages, path]
  );

  React.useEffect(() => {
    if (messages[0].source === "user") {
      const machineMessage = machineMessages[path.at(-1).replaceAll(" ", "_")];
      var message = messages[0].message;
      if (
        message !== machineMessage.backSelection &&
        !machineMessages.hasOwnProperty(message.replaceAll(" ", "_"))
      ) {
        getUserSelection(
          machineMessage.clickableMessages,
          message,
          (selection) => handleSelection(selection, message)
        );
      } else handleSelection(message, message);
    }
  }, [handleSelection, messages, path]);

  function newMessage(e) {
    var message = document.getElementById("chatPrompt").value;
    setMessages([{ source: "user", message: message }, ...messages]);
    document.getElementById("chatPrompt").value = "";
    e.preventDefault();
  }

  function messageClick(e) {
    document.getElementById("chatPrompt").value = e.target.innerText;
    newMessage(e);
  }

  return (
    <div className="App">
      <div className="App-header">
        <ChatInput newMessage={newMessage} placeholder={messages.length > 1 ? "" : "Use natural language or click the option directly to select it."}/>
        <Messages messages={messages} messageClick={messageClick} />
      </div>
    </div>
  );
}

export default App;
