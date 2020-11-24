import React from "react";
import "./App.scss";
//components
import Main from "./components/Main/Main";
//react-router
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Main />;
      </Router>
    </>
  );
}

export default App;
