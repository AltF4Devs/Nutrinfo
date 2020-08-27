import React from "react";
import Drawer from "../../components/Drawer";
import Navbar from "../../components/NavBar";
import Gallery from "../../components/Gallery";
import TextAudio from "../../components/TextAudio";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ReactComponent as IconDown } from "../../assets/icon-down.svg";

import "./DrawerPage.css";

import DrawerOne from '../../components/Svgs/Drawer1'
import TextThree from '../../components/Svgs/TextThree'
import DrawerFour from '../../components/Svgs/Drawer4'
import TextFive from '../../components/Svgs/TextFive'
import TextSix from '../../components/Svgs/TextSix'
import TextEight from '../../components/Svgs/TextEight'
import DrawerNine from '../../components/Svgs/Drawer9'
import TextTen from '../../components/Svgs/TextTen'
import DrawerEleven from '../../components/Svgs/Drawer11'
import TextTwelve from '../../components/Svgs/TextTwelve'
import DrawerThirteen from '../../components/Svgs/Drawer13'
import TextFourteen from '../../components/Svgs/TextFourteen'
import DrawerFifteen from '../../components/Svgs/Drawer15'
import DrawerSixteen from '../../components/Svgs/Drawer16'

import AudioThree from '../../components/Audio/TextThree.mp3';
import AudioFive from '../../components/Audio/TextFive.mp3';
import AudioSix from '../../components/Audio/TextSix.mp3';
import AudioEight from '../../components/Audio/TextEight.mp3';
import AudioTen from '../../components/Audio/TextTen.mp3';
import AudioTwelve from '../../components/Audio/TextTwelve.mp3';
import AudioFourteen from '../../components/Audio/TextFourteen.mp3';


export default function DrawerPage() {

  const [content, setContent] = React.useState([
    { Img: DrawerOne,  type: "img", newImg: null, id: 0 },
    { Img: TextThree, type: "text", newImg: null, audio: AudioThree, id: 1 },
    { Img: DrawerFour,  type: "img", newImg: null, id: 2 },
    { Img: TextFive  ,type: "text", newImg: null, audio: AudioFive, id: 3 },
    { Img: TextSix  ,type: "text", newImg: null,audio: AudioSix, id: 4 },
    { Img: TextEight, type: "text", newImg: null,audio: AudioEight, id: 5 },
    { Img: DrawerNine , type: "img", newImg: null, id: 6 },
    { Img: TextTen, type: "text", newImg: null,audio: AudioTen, id: 7 },
    { Img: DrawerEleven, type: "img", newImg: null, id: 8 },
    { Img: TextTwelve, type: "text", newImg: null,audio: AudioTwelve, id: 9 },
    { Img: DrawerThirteen , type: "img", newImg: null, id: 10 },
    { Img: TextFourteen , type: "text", newImg: null,audio: AudioFourteen, id: 11 },  
    { Img: DrawerFifteen, type: "img", newImg: null, id: 12 },
    { Img: DrawerSixteen, type: "img", newImg: null, id: 13 },
  ]);
  const [idx, setIdx] = React.useState(0);
  const currentPage = content[idx] // Only read

  const saveSvgAsPng = require('save-svg-as-png')
  const imageOptions = {
    scale: 5,
    encoderOptions: 1,
    backgroundColor: 'white',
  }

  const download = async () => {
    const draw = document.getElementById("drawer")
    console.log(draw)
    const a = await saveSvgAsPng.saveSvgAsPng(draw, 'ze', imageOptions);
    console.log(a)
  }

  const handleContent = (newContent) => {
    setContent(newContent)
  }

  const handlePage = idx => {
    setIdx(idx);
  };

  const prevPage = () => {
    if(idx > 0)
      setIdx(idx => idx -= 1)
  }

  const nextPage = () => {
    if(idx < 13)
      setIdx(idx => idx += 1)
  }

  console.log(content)
  return (
    <div className="background-drawer-page">
      <Container fluid>
        <Row>
          <Col sm={12} lg={3} className="Col-Gallery">
          <Row>
              <Col>
                <Button block onClick={download} className="btn-download" style={{marginTop: 5, marginBottom: 5}}>
                  <IconDown style={{ marginRight: 5, width: 28, height: 28 }} />
                  Baixar
                </Button>
              </Col>
          </Row>
            <Gallery content={content} handlePage={handlePage} />
          </Col>
          <Col sm={12} lg={9} className='Col-Content'>
            {currentPage.type === "img" ? (
              <Drawer 
                idx={idx} 
                content={content} 
                handleContent={handleContent}
                prevPage={prevPage}
                nextPage={nextPage}
              />
            ) : (
              <TextAudio 
                content={currentPage} 
                prevPage={prevPage} 
                nextPage={nextPage}
              />
             
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
