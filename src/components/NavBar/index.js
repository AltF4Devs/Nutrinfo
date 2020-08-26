import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./styles.css";
import logo from "../NavBar/logo-nutrinfo.png";

export default function NavBar() {

    return (
        <Navbar variant="dark" className="navBar">
            <Navbar.Brand href="#home">
                <img alt="" src={logo} className="d-inline-block align-top"/>{' '}
            </Navbar.Brand>
        </Navbar>
    );
}
