import { useState } from "react";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [flavor, setFlavor] = useState("Strawberry");
  const [darkMode, setDarkMode] = useState(false);
  const [fonttSize, setFontSize] = useState(44);
  const [disabled, setDisabled] = useState(false);
  return (
    <section className="AdDesigner">
      <h2>Ad Designer</h2>
      <div className={`ad ${darkMode ? " dark-mode" : ""}`}>
        <p>Vote for:</p>
        <p className="Flavor" style={{ fontSize: fonttSize + "px" }}>
          {flavor}
        </p>
      </div>
      <div>
        <h3>What to Support</h3>
        <button
          className={`${disabled === true ? "disabled" : ""}`}
          onClick={() => {
            setFlavor("Chocolate");
            if (flavor === "Chocolate") {
              setDisabled(true);
            } else if (flavor !== "Chocolate") {
              setDisabled(false);
            }
          }}
        >
          Chocolate
        </button>
        <button
          className={`${disabled ? "disabled" : ""}`}
          onClick={() => {
            setFlavor("Vanilla");
            if (flavor === "Vanilla") {
              setDisabled(true);
            } else if (flavor !== "Vanilla") {
              setDisabled(false);
            }
          }}
        >
          Vanilla
        </button>
        <button
          onClick={() => {
            setFlavor("Strawberry");
          }}
        >
          Strawberry
        </button>
      </div>
      <div>
        <h3>Color Theme</h3>
        <button
          onClick={() => {
            setDarkMode(false);
          }}
        >
          Light
        </button>
        <button
          onClick={() => {
            setDarkMode(true);
          }}
        >
          Dark
        </button>
      </div>
      <div>
        <h3>Font Size</h3>
        <button
          onClick={() => {
            setFontSize(fonttSize - 1);
          }}
        >
          Down
        </button>
        <p>{fonttSize}</p>
        <button
          onClick={() => {
            setFontSize(fonttSize + 1);
          }}
        >
          Up
        </button>
      </div>
    </section>
  );
};

export default AdDesigner;
