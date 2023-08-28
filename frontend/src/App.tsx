import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Tickets from "./components/Tickets";

export default function App() {

  return(

    <Router>
      <Routes>
        <Route path="/" element={<Tickets/>}> </Route>
        <Route path="/Tickets" element={<Tickets/>}> </Route>

      </Routes>
    </Router>



  );



}

