import React from "react";
import Content from "./Content";
import notes from "../Note";

function AddNote(e) {
   
        e.preventDefault();
        console.log('You clicked submit.');
      
}
function Note(props) {
    return (
      <div>
        <form onSubmit={AddNote}>
          <input type="text" placeholder="Title" /><br />
          <input type="text" placeholder="Content" /><br />
          <button type="submit" >Save</button>
        </form>
      </div>
    )
}
export default Note;