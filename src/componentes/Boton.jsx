import React from "react";
import "../estilos/Boton.css";

function Boton(props) {
  const esOperador = (valor) => {
    // valor no es un numero y tampoco es un punto y tampoco es igual
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    <button
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      // funcion anonima
      onClick={() => props.manejarClick(props.children)}
    >
      {props.children}
    </button>
  );
}

export default Boton;
