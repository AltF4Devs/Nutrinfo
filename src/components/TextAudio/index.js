import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaRegPlayCircle } from "react-icons/fa";
import NextPageImg from '../../assets/next_arrow.svg';
import PreviousPageImg from '../../assets/previous_arrow.svg';
import './TextAudio.css'

export default function Gallery(props) {
  const Page = props.content.Img
  const {prevPage, nextPage} = props

  return (
    <Container>
      <Row> 
        <Col xs={12} className="mobile-arrows">
          <img src={PreviousPageImg} className='btn-img' onClick={prevPage}/>
          <img src={NextPageImg} className='btn-img' onClick={nextPage}/>
        </Col>
        <Col md={12} lg={9} className="Col-Image">
          <img src={PreviousPageImg} className='btn-img' onClick={prevPage}/>
          <Page className='page-audio'/>
          <img src={NextPageImg} className='btn-img' onClick={nextPage}/>
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
