import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dog from "../../public/img/dog.svg";
import { Dog } from "./Dog";

export default function Home() {
  const handleClick = e => {
    const path = e.target;

    path.style.fill = "red";
  };

  React.useEffect(() => {
    const paths = document.querySelectorAll("path");

    paths.forEach(path => {
      path.addEventListener("click", handleClick);
    });
  }, []);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto" style={{ marginTop: 10 }}>
          <Dog />
        </Col>
      </Row>
    </Container>
  );
}
