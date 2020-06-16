import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReactComponent as PageOne } from "../assets/page1.svg";
import "./Drawer.css";
import CollorPallete from "./CollorPallete";
import Button from "react-bootstrap/Button";

export default function Home() {
  const [currentColor, setCurrentColor] = React.useState("#444");
  const [undo, setUndo] = React.useState([]); // desfazer
  const [redo, setRedo] = React.useState([]); // refazer

  const drawerColor = path => {
    const prevColor = path.style.fill;
    path.style.fill = currentColor;
    pushUndo(prevColor, path);
  };

  const pushUndo = (prevColor, path) => {
    const obj = { path, prevColor };
    const copyUndo = [...undo];

    // Grava as últimas 10 ações. Se o vetor de ações estiver cheio,
    // faz um shift para a esquerda, liberando espaço para a nova ação.
    if (undo.length >= 3) copyUndo.shift();

    setUndo([...copyUndo, obj]);
  };

  const pushRedo = (prevColor, path) => {
    const obj = { path, prevColor };
    setRedo(redo => [...redo, obj]);
  };

  const startUndo = () => {
    const undoNew = [...undo];
    const { path, prevColor } = undoNew.pop();

    pushRedo(path.style.fill, path);

    setCurrentColor(prevColor);
    setUndo(undoNew);

    path.style.fill = prevColor;
  };

  const startRedo = () => {
    const redoNew = [...redo];
    const { path, prevColor } = redoNew.pop();

    pushUndo(path.style.fill, path);

    setCurrentColor(prevColor);
    setRedo(redoNew);

    path.style.fill = prevColor;
  };

  const handleColor = color => {
    setCurrentColor(color);
  };

  return (
    <Container>
      <Row className="justify-content-md-center" style={{ marginTop: 10 }}>
        <Col md={5}>
          <PageOne className="drawer" onClick={e => drawerColor(e.target)} />
        </Col>
        <Col md={4}>
          <CollorPallete handleColor={handleColor} color={currentColor} />
        </Col>

        <Col md={3}>
          {undo.length}
          {undo.length === 0}
          <Button onClick={startUndo} disabled={undo.length === 0}>
            Desfazer
          </Button>
          <Button onClick={startRedo} disabled={redo.length === 0}>
            Refazer
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
