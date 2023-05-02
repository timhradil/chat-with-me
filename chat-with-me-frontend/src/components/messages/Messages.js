import React from "react";
import "./Messages.css";
import Message from "./message/Message";

export default function Messages(props) {
  return (
    <div className="messages">
      {props.messages.map((item, i) => {
        return <Message i={i} item={item} messageClick={props.messageClick} />;
      })}
    </div>
  );
}
