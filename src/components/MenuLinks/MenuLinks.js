import React from "react";
//import MonstersList from '../MonstersList/MonstersList'
//import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { StyledButton } from "../Forms/StyledButton";

const menuLinks = () => (
  <div>
    <Router>
      <StyledButton to="/gnomes">Gnomes</StyledButton>
      <StyledButton to="/trolls">Trolls</StyledButton>
    </Router>
  </div>
);

export default menuLinks;
