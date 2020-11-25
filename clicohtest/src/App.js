import React, { useEffect } from "react";
import "./App.scss";
//components
import Main from "./components/Main/Main";
//react-router
import { BrowserRouter as Router } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { contextSelector, setUser } from "./reducers/contextSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //get user if exists in local storage and set it to the context user
    const storageUser = localStorage.getItem("user");
    if (storageUser) {
      dispatch(setUser({ user: JSON.parse(storageUser) }));
    }
  }, []);

  return (
    <>
      <Router>
        <Main />;
      </Router>
    </>
  );
}

export default App;
