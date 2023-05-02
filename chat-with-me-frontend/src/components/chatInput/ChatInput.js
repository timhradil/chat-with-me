import React from "react";
import "./ChatInput.css";

export default function ChatInput(props) {
  return (
    <div className="chat-input">
      <form
        id="chatInputForm"
        onSubmit={(message) => props.newMessage(message)}
      >
        <input id="chatPrompt" autoComplete="off" type="text" placeholder={props.placeholder}></input>
      </form>
    </div>
  );
}
