import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Navbar from "./Components/navbar";
import Profile from "./views/Profile";
import Vehicles from "./views/Vehicles"
import Planets from "./views/Planets";
import injectContext from "./store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return <>
    <BrowserRouter>
    <Navbar />
      <Routes >
        < Route path="/" element = {<Home />} />
        <Route path="/profile" element={<Profile/>} />
        < Route path="/vehicles" element = {<Vehicles />} />
        < Route path="/planets" element = {<Planets />} />
        < Route path="*" element = {<h1>Not found</h1>} />
      </Routes>
    </ BrowserRouter>
  </>
}

export default injectContext(App);
