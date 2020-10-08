// este componente se encarga de recolectar todos los datos para luego proceder hacer los calculos
import React from "react";

function ObtencionVeloLongDia({
  //esta variables son extraidas desde app.js
  setVelocidadAgua,
  setLogitud,
  setDiametros,
  setFactorFriccion,
}) {
  //esta funcion obtiene el valor del input que hace referencia a la velocidad del agua
  function obtenerVelocidad(e) {
    setVelocidadAgua(e.target.value);
  }
  //esta funcion obtiene el valor del input que hace referencia a la longitud del tubo
  function obtenerLongitud(e) {
    setLogitud(e.target.value);
  }
  //esta funcion obtiene el valor del input que hace referencia a la diametro del tubo
  function obtenerDiametros(e) {
    setDiametros(e.target.value);
  }
  function obtenerFactorFriccion(e) {
    setFactorFriccion(e.target.value);
  }

  /* Con el retur mostramos en pantalla cada etiqueda de html
    div - indiva que es una division del codigo
    h2 - indica que es un titulo de la interfaz
    input - caja de texto donde el usuario puede ingresar los datos 
    label - comentario que hacen referencia al input
    form - hace referencia a un formulario en el codigo
  */
  return (
    <div className="inicio">
      <h2>Ingrese la velocidad, logitud y diametro</h2>
      <form>
        <div className="velocidadLongitudDiametro">
          <label>Velocidad:</label>
          <input type="number" min="0" onChange={obtenerVelocidad} required />
          <label>m/s</label>
        </div>

        <div className="velocidadLongitudDiametro">
          <label>Logintud:</label>
          <input type="number" min="0" onChange={obtenerLongitud} required />
          <label>m</label>
        </div>

        <div className="velocidadLongitudDiametro">
          <label>Diametros:</label>
          <input type="number" min="0" onChange={obtenerDiametros} required />
          <label>m</label>
        </div>

        <div className="velocidadLongitudDiametro">
          <label>Factor de friccion:</label>
          <input
            type="number"
            min="0"
            onChange={obtenerFactorFriccion}
            required
          />
        </div>
      </form>
    </div>
  );
}

export default ObtencionVeloLongDia;
