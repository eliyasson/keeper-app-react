import React from "react";

function AddNote(e) {
   
        e.preventDefault();
        console.log('You clicked submit.');
      
}
function Note() {
    return (
      <form onSubmit={AddNote}>
        <input type="text" placeholder="Title" /><br />
        <input type="text" placeholder="Content" /><br />
        <button type="submit" >Save</button>
      </form>
    )
}
export default Note;