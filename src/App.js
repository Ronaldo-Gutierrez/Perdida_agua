import React, { useState } from "react";

//importamos los componentes donde obtenemos y mostramos los datos en la interfaz
import ObtencionDatos from "./components/ObtencionDatos";
import MuestraPerdida from "./components/MuestraPerdida";
import ObtencionVeloLongDia from "./components/ObtencionVeloLongDia";

function App() {
  // son las variables donde se almacena la catidad de cada accesorio utilizado en cada tramo
  const [accesoriosUsados, setAccesoriosUsados] = useState({
    valvulaGloboAbierta: 0,
    valvulaAnguloAbierta: 0,
    valvulaCompuertaAbierta: 0,
    valvulaCompuertaAbierta3_4: 0,
    valvulaCompuertaMedioAbierta: 0,
    valvulaCompuertaAbierta1_4: 0,
    valvulaRetencionBola: 0,
    ValvulaRetencionBisagra: 0,
    codo90: 0,
    codo90corto: 0,
    codo90Largo: 0,
    codo45: 0,
    teSalidaLatera: 0,
    tePasoDerecho: 0,
    curvatura180: 0,
    medidorAguaDisco: 0,
  });

  // son las variables donde se almacena la velocidad del agua, longitud del tubo y diametro del tubo
  const [velocidadAgua, setVelocidadAgua] = useState(0);
  const [longitud, setLogitud] = useState(0);
  const [diametros, setDiametros] = useState(0);
  const [factorFriccion, setFactorFriccion] = useState(0);

  return (
    <div className="App">
      {/* componente donde se ingresa velocidad, longitud, dimension */}
      <ObtencionVeloLongDia
        setVelocidadAgua={setVelocidadAgua}
        setLogitud={setLogitud}
        setDiametros={setDiametros}
        setFactorFriccion={setFactorFriccion}
      />
      {/* Mostrando en pantalla el componente de ObtencionDatos
      este componente se encarga de recolectar todos los datos para luego proceder hacer 
      los calculos
      */}
      <ObtencionDatos
        accesoriosUsados={accesoriosUsados}
        setAccesoriosUsados={setAccesoriosUsados}
      />
      {/* Mostrando en pantalla el componente de MuestraPerdida 
      este componente se encarga de hacer las operaciones y mostrar los resultados en pantalla
      */}
      <MuestraPerdida
        accesoriosUsados={accesoriosUsados}
        velocidadAgua={velocidadAgua}
        longitud={longitud}
        diametros={diametros}
        factorFriccion = {factorFriccion}
      />
    </div>
  );
}

export default App;
