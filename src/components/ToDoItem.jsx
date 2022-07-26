import React, { useState } from "react";

function ToDoItem(props) {
  const [check, setCheck] = useState(false);
  function handleClick() {
    setCheck((prevValue) => {
      return !prevValue;
    })
  }

  return (
    <div onClick={handleClick}>
      <li style={{textDecoration: check? 'line-through': 'none'}}>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
