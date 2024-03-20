import React from "react";
import Watch from "./Watch";
import SortPopup from "./SortPopup";
import logo from "../images/logo.png";

import "../styles/header.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Pizza logo" />
        </div>
        <Watch />
        <SortPopup />
      </div>
    );
  }
}
export default Header;
