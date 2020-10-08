// este componente se encarga de hacer las operaciones y mostrar los resultados en pantalla
import React from "react";
import { accesorios } from "../data";

function MuestraPerdida({
  //esta variables son extraidas desde app.js
  accesoriosUsados,
  velocidadAgua,
  diametros,
  longitud,
  factorFriccion
}) {
  /* colocamos las cantidades de cada accesorio utilizado en el tramo en un arreglo 
  para luego hacer las operaciones correspondientes */
  let cantidadAcesoriosUsados = Object.values(accesoriosUsados); 
  //arreglo donde se guardara la perdida de agua por los accesorios utilizados
  let perdidaAgua = [];
  //aqui se guardara cuanta agua se perdio por la longitud de la tuberia 
  let perdidaPorTuberia = 0;
  //aqui se guardara cuanta agua se perdio por el uso de accesorios 
  let perdidaTotalAccesorios = 0;
  //aqui se guardara el total de agua qie se perdio en los tramos
  let perdidaTotal = 0;

  /*Con esta funcion calculamos la perdida que hay por el uso de accesorios
  teniendo en cuenta que la ecuacion es k*((v^2)/2g) donde 
  k = constante de perdida local
  g = gravedad 
  v = velocidad del agua
  */
  function calcularPerdidaAguaAccesorios(cantidad, k) {
    const gravedad = 9.81;
    let respuesta = 0;
    respuesta =
      k * (((velocidadAgua * velocidadAgua) / (2 * gravedad))) * cantidad;
    console.log(k)
    //lo multiplicamos por la cantidad de un accesorio.
    return respuesta;
  }

  /*Con esta funcion calculamos la perdida que hay por la longitud de tuberia 
  teniendo en cuenta que la ecuacion es f*(l/d)*(v^2/2g)  donde 
  f = factor de friccion
  l = longitud
  d = diametro
  g = gravedad 
  v = velocidad del agua
  */

  function calcularPerdidaAguaLongitud(l, d) {
    /*se verifica que la longitud y el diametro sean ingresados por el usuario
    si el usuario no ingresa la longitud y el diametro la perdida por longitud de tuberia sera 0 
    */
    if (!l || !d) {
      return 0;
    }
    const gravedad = 9.8;
    let respuesta2 = 0;
    respuesta2 =
    factorFriccion * (l / d) * (((velocidadAgua * velocidadAgua) / 2) * gravedad);
    return respuesta2;
  }

  /* con un for recorremos todos los accesorios para saber cuanta agua se perdio por 
  cada uno de ellos y el resultado de la ecuacion "calcularPerdidaAguaLongitud" 
  se guarda en un arreglo.
  cabe resaltar que si no se utilizo un accesorio la ecuacion se volvera 0*/
  for (let i = 0; i < cantidadAcesoriosUsados.length; i++) {
    perdidaAgua[i] = calcularPerdidaAguaAccesorios(
      cantidadAcesoriosUsados[i],
      accesorios[i].k
    );
   
  }

  /* con este for se suma la perdida de agua por cada accesorio para saber 
  cual fue el total de perdida de agua que hubo por el uso de accesorios */

  for (let i = 0; i < cantidadAcesoriosUsados.length; i++) {
    perdidaTotalAccesorios += perdidaAgua[i];
  }

  /*  se utiliza la funcion "calcularPerdidaAguaLongitud" para saber cuanta agua se pierde
  por la longitud que tiene la tuberia 
  */
  perdidaPorTuberia = calcularPerdidaAguaLongitud(longitud, diametros);
  perdidaTotal = perdidaTotalAccesorios + perdidaPorTuberia;
  /*sumamos la perdida por los accesorios y por la longitud de tuberias para saber 
  cuanta agua se pierde en total
  */


   /* Con el retur mostramos en pantalla cada etiqueda de html
    div - indiva que es una division del codigo
    h2 - indica que es un titulo de la interfaz
    input - caja de texto donde el usuario puede ingresar los datos 
    label - comentario que hacen referencia al input
    form - hace referencia a un formulario en el codigo
  */

  return (
    <div className="muestraDatos">
      {/* si la perdida total es 0 no muestra nada en pantalla por que 
      aun no se han ingresado todos los datos completos, si se encuentra un dato diferente a cero
       en la perdida se procede a mostrar los datos en pantalla */}
      {!perdidaTotal ? null : <h1>Perdida de agua por accesorios: </h1>}
      {perdidaAgua.map((valor, i) => (
        <div key={i}>
          {/* Filtramos - la variable valor hace referencia a la cantidad de accesorios utilizados
          si esta es 0 este accesorio no se mostrara en pantalla como una perdida, solo se muestran
          en las perdidas los accesorios que se utilizaron 
          */}
          {!valor ? null : (
            <div>
              <h3>{accesorios[i].nombre}</h3>
              <p>Perdida de: {valor}m</p>
              <p>Perdida por unidad: {valor / cantidadAcesoriosUsados[i]}m</p>
            </div>
          )}
        </div>
      ))}
      {/* si perdidaTotal es cero entronces no se muestra el componente */}
      {!perdidaTotal ? null : (
        <div>
          <h1>Perdida total de agua: {perdidaTotal} m</h1>
          <p>Perdida por accesorios: {perdidaTotalAccesorios}m</p>
          <p>Perdida por Longitud del tubo: {perdidaPorTuberia}m</p>
        </div>
      )}
    </div>
  );
}

export default MuestraPerdida;
