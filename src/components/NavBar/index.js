import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import "./styles.css";

export default function NavBar() {

    return (
        <Navbar variant="dark" className="navBar">
            <Navbar.Brand href="#home">
                <img alt="" src="/logo.svg" width="30" height="30" className="d-inline-block align-top"/>{' '}
                Nutrinfo
            </Navbar.Brand>
        </Navbar>
    );
}
