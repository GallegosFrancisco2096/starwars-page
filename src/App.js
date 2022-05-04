import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";

import Details from "./views/Details";
import injectContext from "./store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return <>
    <BrowserRouter>

      <Routes >
        < Route path="/" element={<Home />} />
        <Route path="/:type/:id" element={<Details />} />
        < Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </ BrowserRouter>
  </>
}

export default injectContext(App);
