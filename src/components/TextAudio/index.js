import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaRegPlayCircle } from "react-icons/fa";
import { GrPauseFill } from "react-icons/fa";
import { FaPause } from "react-icons/fa";


import NextPageImg from '../../assets/next_arrow.svg';
import PreviousPageImg from '../../assets/previous_arrow.svg';
import './TextAudio.css'

import AudioThree from '../../components/Audio/TextThree.mp3';
import AudioFive from '../../components/Audio/TextFive.mp3';

import ReactAudioPlayer from 'react-audio-player';

export default function Gallery(props) {
  const Audio = props.content.audio
  const Page = props.content.Img
  const {prevPage, nextPage} = props
  
  const audio = document.getElementById('audio') 
  function play(){
    audio.play()
  }
  
  function pause(){
    audio.pause()
  }

  
  return (
    <Container className='Col-Content-Text'>
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
        <Col className='display-center'>
         
          <Button className='btn-listen' onClick={play}>
            <FaRegPlayCircle className='icon-listen'  /> Ouvir 
          </Button>

          <Button className='btn-listen' onClick={pause}>
            <FaPause/> Pausa
          </Button>
         
         
          <ReactAudioPlayer id="audio" src={Audio} />  
        
            
        </Col>
      </Row>
      <Row>
        
      </Row>
    </Container>
  );
}
