import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import CollorPallete from "../CollorPallete/";
import "./Drawer.css";

export default function Drawer(props) {
  const {idx, handleContent} = props
  const copyContent = [...props.content]
  const currentPage = copyContent[idx]
  const Page = currentPage.Img
  const [currentColor, setCurrentColor] = React.useState("#444");
  const [undo, setUndo] = React.useState([]); // desfazer
  const [redo, setRedo] = React.useState([]); // refazer
  const refDrawer = React.useRef()

  React.useEffect(() => {
    clearUndoRedo()  
    paintSave() // Pinta o desenho atual, se ele ja tiver sido pintado antes

    // Salva uma referencia do desenho atual, para que ele possa ser salvo
    // quando o novo desenho for carregado no DOM
    refDrawer.current = document.querySelector('.drawer')

    return () => {
      saveDrawer()
    }
  }, [Page])

  const paintSave = () => {
    // Se newImg não for nulo, a imagem ja foi pintada antes. Então repintamos
    // os paths da imagem atual com as cores dos paths armazenados
    if (currentPage.newImg){
      const prevPaths = currentPage.newImg
      const newDrawer = document.querySelector('.drawer')
      const newPaths = newDrawer.querySelectorAll('path')

      newPaths.forEach((np, idx) => {
        np.style.fill = prevPaths[idx]
      })
    }
  }

  const saveDrawer = () => {
    // Salva todos os paths do desenho atual, para armazenar o que foi pintado
    // const currentDrawer = document.querySelector('.drawer')
    const paths = refDrawer.current.querySelectorAll('path')

    const colors = [...paths].map(p => {
      return p.style.fill
    })

    currentPage.newImg = colors
    copyContent[idx] = currentPage
    handleContent(copyContent)
  }

  const drawerColor = path => {
    const prevColor = path.style.fill;
    path.style.fill = currentColor;
    pushUndo(prevColor, path);
  };

  const clearUndoRedo = () => {
    setUndo([])
    setRedo([])
  }

  const pushUndo = (prevColor, path) => {
    const obj = { path, prevColor };
    const copyUndo = [...undo];

    // Grava as últimas 10 ações. Se o vetor de ações estiver cheio,
    // faz um shift para a esquerda, liberando espaço para a nova ação.
    if (undo.length >= 10) copyUndo.shift();

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
    setUndo(undoNew);

    path.style.fill = prevColor;
  };

  const startRedo = () => {
    const redoNew = [...redo];
    const { path, prevColor } = redoNew.pop();

    pushUndo(path.style.fill, path);
    setRedo(redoNew);

    path.style.fill = prevColor;
  };

  const handleColor = color => {
    setCurrentColor(color);
  };


  return (
    <Container className="drawer-content">
      <Row className="justify-content-md-center" style={{ marginTop: 10 }}>
        <Col md={9}>
          <Page className="drawer" onClick={e => drawerColor(e.target)} />
        </Col>
        <Col md={3}>
          <CollorPallete
            handleColor={handleColor}
            color={currentColor}
            startUndo={startUndo}
            startRedo={startRedo}
            undo={undo}
            redo={redo}
          />
        </Col>
      </Row>
    </Container>
  );
}
