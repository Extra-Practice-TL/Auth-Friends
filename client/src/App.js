import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <PrivateRoute exact path="/" component={FriendsList} />
      <Route path="/login" component={Login} />
    </>
  );
}

export default App;
