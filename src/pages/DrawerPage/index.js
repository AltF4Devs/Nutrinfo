import React from "react";
import Drawer from "../../components/Drawer";
import Navbar from "../../components/NavBar";
import Gallery from "../../components/Gallery";
import TextAudio from "../../components/TextAudio";
import { Container, Row, Col } from "react-bootstrap";

import "./DrawerPage.css";

import { ReactComponent as DrawerOne } from "../../assets/p1.svg";
import { ReactComponent as TextThree } from "../../assets/t3.svg";
import { ReactComponent as DrawerFour } from "../../assets/p4.svg";
import { ReactComponent as TextFive } from "../../assets/t5.svg";
import { ReactComponent as TextSix } from "../../assets/t6.svg";
import { ReactComponent as TextEight } from "../../assets/t8.svg";
import { ReactComponent as DrawerNine } from "../../assets/p9.svg";
import { ReactComponent as TextTen } from "../../assets/t10.svg";
import { ReactComponent as DrawerEleven } from "../../assets/p11.svg";
import { ReactComponent as TextTwoleven } from "../../assets/t12.svg";
import { ReactComponent as DrawerThirteen } from "../../assets/p13.svg";
import { ReactComponent as TextFourteen } from "../../assets/t14.svg";
import { ReactComponent as DrawerFifteen } from "../../assets/p15.svg";
import { ReactComponent as DrawerSixteen } from "../../assets/p16.svg";

export default function DrawerPage(props) {

  const content = [
    { Img: <DrawerOne />, type: "img", newImg: null },
    { Img: <TextThree />, type: "text", newImg: null },
    { Img: <DrawerFour />, type: "img", newImg: null },
    { Img: <TextFive />, type: "text", newImg: null },
    { Img: <TextSix />, type: "text", newImg: null },
    { Img: <TextEight />, type: "text", newImg: null },
    { Img: <DrawerNine />, type: "img", newImg: null },
    { Img: <TextTen />, type: "text", newImg: null },
    { Img: <DrawerEleven />, type: "img", newImg: null },
    { Img: <TextTwoleven />, type: "text", newImg: null },
    { Img: <DrawerThirteen />, type: "img", newImg: null },
    { Img: <TextFive />, type: "text", newImg: null },
    { Img: <TextFourteen />, type: "text", newImg: null },
    { Img: <DrawerFifteen />, type: "img", newImg: null },
    { Img: <DrawerSixteen />, type: "img", newImg: null },
  ];

  const [current, setCurrent] = React.useState(content[0]);

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
              <Drawer page={current.Img} />
            ) : (
              <TextAudio content={current} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
