import React, { useState } from "react";

function ToDoItem(props) {
  const [check, setCheck] = useState(false);
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li style={{ textDecoration: check ? "line-through" : "none" }}>{props.text}</li>
    </div>
  );
}
/*new added*/
export default ToDoItem;
