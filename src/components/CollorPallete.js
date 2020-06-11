import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { CirclePicker, ChromePicker } from "react-color";

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

  const handleChangeComplete = color => {
    console.log(color.hex);
    handleColor(color.hex);
  };

  return (
    <div>
      <CirclePicker color={color} onChangeComplete={handleChangeComplete} />
      <Button
        onClick={() => setShowPicker(!showPicker)}
        style={{ marginTop: 10 }}
      >
        {" "}
        Mais{" "}
      </Button>
      {showPicker && (
        <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
      )}
    </div>
  );
}
