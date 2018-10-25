import React from "react";

const MessageApiPopUp = props => {
  return (
    <div className={"MessageApiPopUpContainer"}>
      <div className={"MessageApiPopUpBox"}>
          <button onClick={props.closePopUp}>X</button>
          {props.children}
      </div>
    </div>
  );
};

export default MessageApiPopUp;
