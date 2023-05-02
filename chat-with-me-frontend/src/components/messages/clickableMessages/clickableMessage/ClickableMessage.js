import React from "react";
import "./ClickableMessage.css";

export default function ClickableMessage(props) {
  return (
    <button
      key={"clickableMessage" + props.i}
      className="clickableMessage"
      onClick={(message) => props.messageClick(message)}
    >
      {props.item}
    </button>
  );
}
