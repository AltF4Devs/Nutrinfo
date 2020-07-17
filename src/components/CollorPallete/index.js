import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { CirclePicker, ChromePicker } from "react-color";
import { FcRedo, FcUndo } from "react-icons/fc";
import { FaRedoAlt, FaUndoAlt, FaReply, FaPalette } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./CollorPallete.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const styles = {
  cardPallete: {
    border: "1px solid red",
    width: 100,
    height: 150,
    padding: 10
  }
};

export default function CollorPallete(props) {
  const { handleColor, color } = props;
  const [showPicker, setShowPicker] = React.useState(false);
  const { startUndo, startRedo, undo, redo } = props;

  const handleChangeComplete = color => {
    console.log(color.hex);
    handleColor(color.hex);
  };

  return (
    <div className="pallete-container">
      <CirclePicker
        color={color}
        onChangeComplete={handleChangeComplete}
        width={100}
        circleSize={36}
      />
      <div className="buttons-container">
        <OverlayTrigger
          placement="left"
          delay={{ show: 250, hide: 260 }}
          overlay={<Tooltip id="button-tooltip">Desfazer</Tooltip>}
        >
          <Button
            variant="outline"
            onClick={startUndo}
            disabled={undo.length === 0}
            className="btn-circle"
          >
            <IconContext.Provider
              value={{ color: "black", className: "global-class-name" }}
            >
              <div>
                <FaReply className="icons" />
              </div>
            </IconContext.Provider>
          </Button>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 260 }}
          overlay={<Tooltip id="button-tooltip-redo">Refazer</Tooltip>}
        >
          <Button
            variant="outline"
            onClick={startRedo}
            disabled={redo.length === 0}
            className="btn-circle"
          >
            <IconContext.Provider
              value={{ color: "black", className: "icon-flip" }}
            >
              <div>
                <FaReply className="icons" />
              </div>
            </IconContext.Provider>
          </Button>
        </OverlayTrigger>
      </div>

      {showPicker && (
        <ChromePicker
          color={color}
          onChangeComplete={handleChangeComplete}
          disableAlpha={true}
        />
      )}

      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 260 }}
        overlay={<div></div>}
      >
        <Button
          variant="outline"
          onClick={() => setShowPicker(!showPicker)}
          style={{ marginTop: 10 }}
          className="button-palette"
        >
          <IconContext.Provider
            value={{
              color: "black",
              size: 20,
              className: "global-class-name"
            }}
          >
            <div>
              <FaPalette className="icon-palette" />
              Cores
            </div>
          </IconContext.Provider>
        </Button>
      </OverlayTrigger>
    </div>
  );
}
