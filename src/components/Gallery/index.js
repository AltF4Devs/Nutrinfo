import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaRegPlayCircle, FaPalette } from "react-icons/fa";
import { RiDownloadLine } from "react-icons/ri";
import { ReactComponent as IconDown } from "../../assets/icon-down.svg";
import "./Gallery.css";

export default function Gallery(props) {
  const { content, handlePage } = props;

  return (
    <Container>
      <Row>
        <Button block className="btn-download">
          <IconDown style={{ marginRight: 5, width: 28, height: 28 }} />
          Baixar
        </Button>
      </Row>
      <Row className="container-gallery">
        {content.map((item, id) => (
          <Col sm={6} className="item-gallery" onClick={() => handlePage(id)}>
            {/*<item.Img className="square-gallery" />*/}
            {item.Img}
            {item.type === "img" ? (
              <FaPalette className="icon-drawer" />
            ) : (
              <FaRegPlayCircle className="icon-audio" />
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
}
