import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

