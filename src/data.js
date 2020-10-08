// los nombres y constante de perdida local de cada accesorio
let accesorios = [
    {
        id: "valvulaGloboAbierta",
        nombre: "Válvula de globo abierta",
        k : 7.5
    },
    {
        id: "valvulaAnguloAbierta",
        nombre: "Válvula de ángulo abierta",
        k : 3.8
    },
    {
        id:"valvulaCompuertaAbierta",
        nombre: "Válvula de compuerta abierta",
        k : 0.15
    },
    {
        id:"valvulaCompuertaAbierta3_4",
        nombre: "Válvula de compuerta abierta 3/4",
        k : 0.85
    },
    {
        id:"valvulaCompuertaMedioAbierta",
        nombre: "Válvula de compuerta medio abierta",
        k : 4.4
    },
    {
        id:"valvulaCompuertaAbierta1_4",
        nombre: "Válvula de compuerta abierta 1/4",
        k : 20
    },
    {
        id:"valvulaRetencionBola",
        nombre: "Válvula de retención de bola",
        k : 70
    },
    {
        id:"ValvulaRetencionBisagra" ,
        nombre: "Válvula de retención de bisagra",
        k : 2
    },
    {
        id:"codo90",
        nombre: "Codo de 90°",
        k : 0.7
    },
    {
        id:"codo90corto",
        nombre: "Codo de 90° corto",
        k : 0.9
    },
    {
        id:"codo90Largo",
        nombre: "Codo de 90° largo",
        k : 0.4
    },
    {   id:"codo45",
        nombre: "Codo de 45°",
        k : 0.35
    },
    {
        id:"teSalidaLatera",
        nombre: "Te salida lateral",
        k : 1.5
    },
    {
        id:"tePasoDerecho",
        nombre: "Te paso derecho",
        k : 0.4
    },
    {
        id:"curvatura180",
        nombre: "Curvatura de 180°",
        k : 1.6
    },
    {
        id: "medidorAguaDisco",
        nombre: "Medidor de agua, disco",
        k : 7
    }
]

// exportamos los datos para acceder desde cualquier parte del codigo
module.exports = {
    accesorios
}