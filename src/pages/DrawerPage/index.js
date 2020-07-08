import React from "react";
import Drawer from "../../components/Drawer";
import Navbar from "../../components/NavBar";
import Gallery from "../../components/Gallery";
import TextAudio from "../../components/TextAudio";
import { Container, Row, Col } from "react-bootstrap";

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


export default function DrawerPage(props) {

  const [content, setContent] = React.useState([
    { Img: DrawerOne,  type: "img", newImg: null, id: 0 },
    { Img: TextThree, type: "text", newImg: null, id: 1 },
    { Img: DrawerFour,  type: "img", newImg: null, id: 2 },
    { Img: TextFive  ,type: "text", newImg: null, id: 3 },
    { Img: TextSix  ,type: "text", newImg: null, id: 4 },
    { Img: TextEight, type: "text", newImg: null, id: 5 },
    { Img: DrawerNine , type: "img", newImg: null, id: 6 },
    { Img: TextTen, type: "text", newImg: null, id: 7 },
    { Img: DrawerEleven, type: "img", newImg: null, id: 8 },
    { Img: TextTwelve, type: "text", newImg: null, id: 9 },
    { Img: DrawerThirteen , type: "img", newImg: null, id: 10 },
    { Img: TextFourteen , type: "text", newImg: null, id: 11 },  
    { Img: DrawerFifteen, type: "img", newImg: null, id: 12 },
    { Img: DrawerSixteen, type: "img", newImg: null, id: 13 },
  ]);
  const [idx, setIdx] = React.useState(0);
  const currentPage = content[idx] // Only read

  const handleContent = (newContent) => {
    setContent(newContent)
  }

  const handlePage = idx => {
    setIdx(idx);
  };

  console.log(content)
  return (
    <div className="background-drawer-page">
      <Navbar />
      <Container fluid className="mt-3">
        <Row>
          <Col md={3}>
            <Gallery content={content} handlePage={handlePage} />
          </Col>
          <Col md={9}>
            {currentPage.type === "img" ? (
              <Drawer idx={idx} content={content} handleContent={handleContent}/>
            ) : (
              <TextAudio content={currentPage} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
