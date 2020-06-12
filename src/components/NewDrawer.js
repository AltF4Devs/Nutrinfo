import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CollorPallete from "./CollorPallete";
import Canvg from "canvg";

export default function Home() {
  const [currentColor, setCurrentColor] = React.useState("#000");
  let v = null;

  /*window.onload = async () => {
    const canvas = document.querySelector("#main-canvas");
    const ctx = canvas.getContext("2d");
    let imageData;

    canvas.width = 700;
    canvas.height = 700;

    v = await Canvg.from(ctx, "/images/fdp.svg");

    console.log(v);

    // Start SVG rendering with animations and mouse handling.
    v.start();

    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    console.log(imageData);
    const col = { r: 0xff, g: 0x0, b: 0x0, a: 0xff };

    canvas.addEventListener("click", event => {
      const rect = canvas.getBoundingClientRect();
      const x = Math.round(event.clientX - rect.left);
      const y = Math.round(event.clientY - rect.top);

      floodFill(imageData, col, x, y);

      ctx.putImageData(imageData, 0, 0);
    });
  };*/

  React.useEffect(() => {
    const img = new Image(1024, 1024);
    img.src = "/images/Lupa.svg";
    img.width = 1024;
    img.height = 1024;
    img.crossOrigin = "Anonymous";

    const canvas = document.querySelector("#main-canvas");
    const ctx = canvas.getContext("2d");
    let imageData;

    canvas.width = 1024;
    canvas.height = 1024;

    img.onload = function() {
      ctx.drawImage(img, 0, 0);
      imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    };

    const col = { r: 0xff, g: 0x0, b: 0x0, a: 0xff };

    canvas.addEventListener("click", event => {
      const rect = canvas.getBoundingClientRect();
      const x = Math.round(event.clientX - rect.left);
      const y = Math.round(event.clientY - rect.top);

      floodFill(imageData, col, x, y);

      ctx.putImageData(imageData, 0, 0);
    });
  });

  const getColorAtPixel = (imageData, x, y) => {
    const { width, data } = imageData;

    return {
      r: data[4 * (width * y + x) + 0],
      g: data[4 * (width * y + x) + 1],
      b: data[4 * (width * y + x) + 2],
      a: data[4 * (width * y + x) + 3]
    };
  };

  const setColorAtPixel = (imageData, color, x, y) => {
    const { width, data } = imageData;

    data[4 * (width * y + x) + 0] = color.r & 0xff;
    data[4 * (width * y + x) + 1] = color.g & 0xff;
    data[4 * (width * y + x) + 2] = color.b & 0xff;
    data[4 * (width * y + x) + 3] = color.a & 0xff;
  };

  /*const colorMatch = (pixelA, pixelB) => {
    return (
      pixelA.r === pixelB.r &&
      pixelA.g === pixelB.g &&
      pixelA.b === pixelB.b &&
      pixelA.a === pixelB.a
    );
  };*/

  const colorMatch = baseColor => {
    //console.log(baseColor);
    const hexx = 0xa5;
    return baseColor.r >= hexx && baseColor.g >= hexx && baseColor.b >= hexx;
  };

  const floodFill = (imageData, newColor, x, y) => {
    const { width, height, data } = imageData;
    const stack = [];
    const baseColor = getColorAtPixel(imageData, x, y);
    let operator = { x, y };

    // Check if base color and new color are the same
    /*if (colorMatch(baseColor, newColor)) {
      return;
    }*/

    const match = colorMatch(baseColor);
    console.log(match);
    console.log(baseColor);
    if (!match) return;

    // Add the clicked location to stack
    stack.push({ x: operator.x, y: operator.y });

    while (stack.length) {
      operator = stack.pop();
      let contiguousDown = true; // Vertical is assumed to be true
      let contiguousUp = true; // Vertical is assumed to be true
      let contiguousLeft = false;
      let contiguousRight = false;

      // Move to top most contiguousDown pixel
      while (contiguousUp && operator.y >= 0) {
        operator.y--;
        contiguousUp = colorMatch(
          getColorAtPixel(imageData, operator.x, operator.y),
          baseColor
        );
      }

      // Move downward
      while (contiguousDown && operator.y < height) {
        setColorAtPixel(imageData, newColor, operator.x, operator.y);

        // Check left
        if (
          operator.x - 1 >= 0 &&
          colorMatch(
            getColorAtPixel(imageData, operator.x - 1, operator.y),
            baseColor
          )
        ) {
          if (!contiguousLeft) {
            contiguousLeft = true;
            stack.push({ x: operator.x - 1, y: operator.y });
          }
        } else {
          contiguousLeft = false;
        }

        // Check right
        if (
          operator.x + 1 < width &&
          colorMatch(
            getColorAtPixel(imageData, operator.x + 1, operator.y),
            baseColor
          )
        ) {
          if (!contiguousRight) {
            stack.push({ x: operator.x + 1, y: operator.y });
            contiguousRight = true;
          }
        } else {
          contiguousRight = false;
        }

        operator.y++;
        contiguousDown = colorMatch(
          getColorAtPixel(imageData, operator.x, operator.y),
          baseColor
        );
      }
    }
  };

  const handleClick = e => {
    const path = e.target;

    path.style.fill = currentColor;
    console.log("f: ", path.style.fill);
  };

  const handleColor = color => {
    setCurrentColor(color);
  };

  React.useEffect(() => {
    console.log(currentColor);
  }, [currentColor]);

  return (
    <Container>
      <Row className="justify-content-md-center" style={{ marginTop: 10 }}>
        <Col md="auto">
          <canvas id="main-canvas" />
        </Col>
        <Col md="auto">
          <CollorPallete handleColor={handleColor} />
        </Col>
      </Row>
    </Container>
  );
}
