import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes/routes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
};

export default App;
