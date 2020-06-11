import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReactComponent as Lupa } from "../../public/images/Lupa.svg";
import "./Drawer.css";
import CollorPallete from "./CollorPallete";

export default function Home() {
  const [currentColor, setCurrentColor] = React.useState("#000");

  const handleClick = e => {
    const path = e.target;
    path.style.fill = currentColor;
  };

  const handleColor = color => {
    setCurrentColor(color);
  };

  return (
    <Container>
      <Row className="justify-content-md-center" style={{ marginTop: 10 }}>
        <Col md="auto">
          <Lupa onClick={e => handleClick(e)} />
        </Col>
        <Col md="auto">
          <CollorPallete handleColor={handleColor} color={currentColor} />
        </Col>
      </Row>
    </Container>
  );
}
