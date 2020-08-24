import React from "react";
import { Link } from "react-router-dom";
import { HeaderSection } from "./style";

const Header = () => {
  return (
    <HeaderSection>
      <Link to="/">Home</Link>
      <Link to="/comparation">Comparar</Link>
    </HeaderSection>
  );
};

export default Header;
