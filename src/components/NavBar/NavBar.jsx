import React from "react";
import "./NavBar.css";

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="Navbar">
      <ul>
        <li><button onClick={() => setCurrentPage("desert")}>Desert</button></li>
        <li><button onClick={() => setCurrentPage("salty")}>Salty</button></li>
        <li><button onClick={() => setCurrentPage("beverages")}>Beverages</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
