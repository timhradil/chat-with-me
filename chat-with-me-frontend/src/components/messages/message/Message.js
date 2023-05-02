import React from "react";
import "./Message.css";
import ClickableMessages from "../clickableMessages/ClickableMessages";

export default function Message(props) {
  return (
    <div key={"messageContainer" + props.i} className="messageContainer">
      <div key={"message" + props.i} className={"message " + props.item.source}>
        {props.item.message}
      </div>
      {props.item.source === "machine" && props.i === 0 && (
        <ClickableMessages
          i={props.i}
          clickableMessages={props.item.clickableMessages}
          messageClick={props.messageClick}
        />
      )}
    </div>
  );
}
