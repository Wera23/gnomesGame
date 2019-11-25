import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { StyledButton } from "../Forms/StyledButton";

const MenuLinks = () => (
  <div>
    <Router>
      <StyledButton href="/gnomes">Gnomes</StyledButton>
      <StyledButton href="/trolls">Trolls</StyledButton>
    </Router>
  </div>
);

export default MenuLinks;
