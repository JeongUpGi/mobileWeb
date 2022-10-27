import React from "react";

const Dialog = (props) => {
  //범용 다이얼로그
  return (
    <div
      style={{
        margin: 8,
        padding: 8,
        borderRadius: 8,
        boxShadow: "0px 0px 4px grey",
        backgroundColor: props.backgroundColor || "white",
      }}
    >
      {props.title && <h1>{props.title}</h1>}
      <p>{props.message}</p>
    </div>
  );
};

export default Dialog;
