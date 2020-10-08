import React from "react";

import { accesorios } from "../data";

function ObtencionDatos({
  //esta variables son extraidas desde app.js
  accesoriosUsados,
  setAccesoriosUsados,
}) {

  /*con esta funcion obtenemos los valores de los input, los cuales hacen referencia
  a la cantidad de cada accesorio utilizado
  */
  function obtencionCantidadAccesorios(e) {
    setAccesoriosUsados({
      ...accesoriosUsados,
      [e.target.name]: e.target.value,
    });
  }


   /* Con el retur mostramos en pantalla cada etiqueda de html
    div - indiva que es una division del codigo
    h2 - indica que es un titulo de la interfaz
    input - caja de texto donde el usuario puede ingresar los datos 
    label - comentario que hacen referencia al input
    form - hace referencia a un formulario en el codigo
  */

  return (
    <div className="obtencionDatos">
      <div>
        <h2>Ingrese la cantidad de accesorios utilizados</h2>
        <form>
          {/* con el map recorremos todos los accesorios y mostramos en pantalla al usuario 
          para que ingrese la cantidad que utilizo de cada uno de ellos */}
          {accesorios.map((accesorio) => ( 
            <div className="inputsAccesorios" key={accesorio.id}>
              <label>{accesorio.nombre}: </label>
              <input
                type="number"
                name={accesorio.id}
                min="0"
                placeholder="0"
                onChange={obtencionCantidadAccesorios}
              />
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default ObtencionDatos;
