import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Video.css";
import logo from "../NavBar/logo-nutrinfo.png";
import Col from "react-bootstrap/Col";

export default function NavBar(props) {
    const { link } = props

    return (
        <Col md="12" lg="4">
            <iframe title="video1" width="380" height="250"
                src={link} frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
        </Col>
    );
}
