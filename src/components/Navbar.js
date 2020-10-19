import React, { useEffect, useState } from "react";
import "./navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`navbar ${show && "navbar-black"}`}>
      <img className="nav-logo" />
      <span className="nav-username">Username</span>
    </div>
  );
}

export default Navbar;
