import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../Note";
import Content from "./Content";

function App() {
  return (
    <div >
      <Header />
      <Note />
      {notes.map(notes => (
         <Content 
          key={notes.key}
          title={notes.title}
          content={notes.content}
        />
      ))}
     
      <Footer />
    </div>
  );
}

export default App;