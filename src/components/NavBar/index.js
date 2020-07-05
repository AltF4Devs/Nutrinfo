import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./styles.css";
import Logo from "../../assets/Logo.png";

export default function NavBar() {
  return (
    <Navbar variant="dark" className="navBar">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={Logo}
          width="160"
          className="d-inline-block align-top"
        />{" "}
      </Navbar.Brand>
    </Navbar>
  );
}
