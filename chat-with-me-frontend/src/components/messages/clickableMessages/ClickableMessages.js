import React from "react";
import "./ClickableMessages.css";
import ClickableMessage from "./clickableMessage/ClickableMessage";

export default function ClickableMessages(props) {
  return (
    <div key={"clickableMessage" + props.i} className="clickableMessages">
      {props.clickableMessages.map((item, i) => (
        <ClickableMessage i={i} messageClick={props.messageClick} item={item} />
      ))}
    </div>
  );
}
