import React, { useState } from "react";

function Todo(props) {
    const [isDone, setIsDone] = useState(false);

    function handleClick() {
        setIsDone(prevValue => {
            return !prevValue;
        });
    }
   return (
        <div onClick={handleClick}> 
            <li style={{textDecoration: isDone ?  "line-through" : "none"}}>{props.text}</li>
        </div>
   ) 
}
export default Todo;