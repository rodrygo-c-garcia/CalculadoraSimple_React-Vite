import { useState } from "react";
import { evaluate } from "mathjs";
import freeCodeCampLogo from "./img/freecodecamp-logo.png";

import "./App.css";
import Boton from "./componentes/Boton";
import BotonClear from "./componentes/BotonClear";
import ModalError from "./componentes/ModalError";
import "bootstrap/dist/css/bootstrap.min.css";
import Pantalla from "./componentes/Pantalla";

function App() {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);

  const agregarInput = (valor) => {
    if (!isNaN(valor)) setInput(input + valor);
    else if (input.slice(-1) !== valor) {
      setInput(input + valor);
    }
  };

  const calcularResultado = () => {
    // evalua una expresion matematica (mathjs)
    if (!isNaN(input.slice(-1))) {
      setInput(evaluate(input).toString());
      handleClose();
    } else {
      setInput("");
      handleShow();
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="App">
        <div className="freecodecamp-logo-contenedor">
          <img
            className="freecodecamp-logo"
            src={freeCodeCampLogo}
            alt="Logo de FreecodeCamp"
          />
        </div>

        <div className="contenedor-calculadora">
          <Pantalla input={input} />
          <div className="fila">
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton manejarClick={agregarInput}>2</Boton>
            <Boton manejarClick={agregarInput}>3</Boton>
            <Boton manejarClick={agregarInput}>+</Boton>
          </div>
          <div className="fila">
            <Boton manejarClick={agregarInput}>4</Boton>
            <Boton manejarClick={agregarInput}>5</Boton>
            <Boton manejarClick={agregarInput}>6</Boton>
            <Boton manejarClick={agregarInput}>-</Boton>
          </div>
          <div className="fila">
            <Boton manejarClick={agregarInput}>7</Boton>
            <Boton manejarClick={agregarInput}>8</Boton>
            <Boton manejarClick={agregarInput}>9</Boton>
            <Boton manejarClick={agregarInput}>*</Boton>
          </div>
          <div className="fila">
            <Boton manejarClick={agregarInput}>0</Boton>
            <Boton manejarClick={agregarInput}>.</Boton>
            <Boton manejarClick={calcularResultado}>=</Boton>
            <Boton manejarClick={agregarInput}>/</Boton>
          </div>
          <div className="fila">
            <BotonClear manejarClick={() => setInput("")}>CLEAR</BotonClear>
          </div>
        </div>
      </div>
      <ModalError show={show} handleClose={handleClose} />
    </>
  );
}

export default App;
