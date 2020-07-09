import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaRegPlayCircle } from "react-icons/fa";
import './TextAudio.css'

export default function Gallery(props) {
  const Page = props.content.Img

  return (
    <Container>
      <Row> 
        <Col className='display-center'>
          <Page className='page-audio'/>
        </Col>
      </Row>
      <Row>
        <Col className='display-center'>
          <Button className='btn-listen'>
            <FaRegPlayCircle className='icon-listen'/> Ouvir
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
