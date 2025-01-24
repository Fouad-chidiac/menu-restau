import React from "react";
import "./LogoHeader.css";
import logo from "../LogoHeader/rest_logo.png"; 

const LogoHeader = () => {
  return (
    <div className="LogoHeader">
      <img src={logo} alt="Logo" className="LogoHeader-img" />
    </div>
  );
};

export default LogoHeader;
