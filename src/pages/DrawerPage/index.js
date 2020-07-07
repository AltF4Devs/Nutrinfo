import React from "react";
import Drawer from "../../components/Drawer";
import Navbar from "../../components/NavBar";
import Gallery from "../../components/Gallery";
import TextAudio from "../../components/TextAudio";
import { Container, Row, Col } from "react-bootstrap";

import "./DrawerPage.css";

import DrawerOne from '../../components/Svgs/DrawerOne'
import TextThree from '../../components/Svgs/TextThree'
import DrawerFour from '../../components/Svgs/DrawerFour'
import TextFive from '../../components/Svgs/TextFive'
import TextSix from '../../components/Svgs/TextSix'
import TextEight from '../../components/Svgs/TextEight'
import DrawerNine from '../../components/Svgs/DrawerNine'
import TextTen from '../../components/Svgs/TextTen'
import DrawerEleven from '../../components/Svgs/DrawerEleven'
import TextTwelve from '../../components/Svgs/TextTwelve'
import DrawerThirteen from '../../components/Svgs/DrawerThirteen'
import TextFourteen from '../../components/Svgs/TextFourteen'
import DrawerFifteen from '../../components/Svgs/DrawerFifteen'
import DrawerSixteen from '../../components/Svgs/DrawerSixteen'


export default function DrawerPage(props) {

  const [content, setContent] = React.useState([
    { Img: DrawerFour,  type: "img", newImg: null },
    { Img: TextThree, type: "text", newImg: null },
    /*{ Img: DrawerFour , type: "img", newImg: null },
    { Img: TextFive  ,type: "text", newImg: null },
    { Img: TextSix  ,type: "text", newImg: null },
    { Img: TextEight, type: "text", newImg: null },
    { Img: DrawerNine , type: "img", newImg: null },
    { Img: TextTen, type: "text", newImg: null },
    { Img: DrawerEleven, type: "img", newImg: null },
    { Img: TextTwelve, type: "text", newImg: null },
    { Img: DrawerThirteen , type: "img", newImg: null },
    { Img: TextFive, type: "text", newImg: null },
    { Img: TextFourteen , type: "text", newImg: null },
    { Img: DrawerFifteen, type: "img", newImg: null },
    { Img: DrawerSixteen, type: "img", newImg: null },*/
  ]);

  const [current, setCurrent] = React.useState(content[0]);

  const handleContent = (newContent) => {
    setContent(newContent)
  }

  const handlePage = idx => {
    setCurrent(content[idx]);
    console.log(idx);
  };

  return (
    <div className="background-drawer-page">
      <Navbar />
      <Container fluid className="mt-3">
        <Row>
          <Col md={3}>
            <Gallery content={content} handlePage={handlePage} />
          </Col>
          <Col md={9}>
            {current.type === "img" ? (
              <Drawer page={current} content={content} handleContent={handleContent}/>
            ) : (
              <TextAudio content={current} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
