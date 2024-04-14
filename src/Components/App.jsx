import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../Note";

function App() {
  return (
    <div className="container">
      <Header />
      <Note />
     
      <Footer />
    </div>
  );
}

export default App;