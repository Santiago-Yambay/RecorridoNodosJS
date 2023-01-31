// DATA
const data = "0 A B C D E F G H I J K L M N O P MALL".split(" ");

const rutas = [
  ["0", "A"],
  ["0", "B"],
  ["0", "C"],
  ["A", "D"],
  ["B", "H"],
  ["C", "E"],
  ["D", "F"],
  ["D", "B"],
  ["B", "H"],
  ["B", "D"],
  ["B", "E"],
  ["E", "B"],
  ["E", "J"],
  ["E", "L"],
  ["L", "E"],
  ["L", "O"],
  ["O", "P"],
  ["L", "M"],
  ["F", "G"],
  ["G", "I"],
  ["I", "K"],
  ["K", "N"],
  ["N", "MALL"],
  ["F", "H"],
  ["H", "F"],
  ["H", "I"],
  ["H", "J"],
  ["J", "H"],
  ["J", "K"],
  ["J", "M"],
  ["M", "J"],
  ["M", "N"],
  ["M", "P"],
  ["P", "MALL"],
  ["P", "M"], 
  
];

// Se inicializa el grafo
const Lista = new Map();

// Se agregan los nodos
function agregarNodo(ruta) {
  Lista.set(ruta, []);
}

// Se agregan los vertices
function agregarVertices(origen, destino) {
  Lista.get(origen).push(destino);
  Lista.get(destino).push(origen);
}

// Se crea el grafo
data.forEach(agregarNodo);
// Se crea las rutas con una funcion trayendo todos los obejtos
rutas.forEach((ruta) => agregarVertices(...ruta));

console.log(Lista)
// Funciones de resolucion
console.log(
  "-------------------- Busquedas no informadas Daniel Montero - Santiago Yambay --------------------"
);

console.log(
  "-------------------- Busquedas Primero en anchura --------------------"
);

function anchura(inicio) {
  const nodoVisitado = new Set();

  const pila = [inicio];

  const res = []

  console.log(`Inicia en ${inicio}`);

  while (pila.length > 0) {
    // Elimina los nodos visitados( FIFO)
    const ruta = pila.shift(); // se cambia la pila

    const destinos = Lista.get(ruta);

    res.push(ruta)
    console.log(res)

    for (const destino of destinos) {
      if (destino === "MALL") {
        console.log(`Se encontro al MALL recorriendo ${res.length-1} nodos` );
        break;
      }
      //Condicion de parada
      if (!nodoVisitado.has(destino)) {
        nodoVisitado.add(destino);
        pila.push(destino);
      }
    }
  }
}
anchura("0");


console.log(
    "-------------------- Busquedas Primero en primero en profundidad--------------------"
  );
const res = []
function profundidad(inicio, nodoVisitado = new Set()) {
  
  // Se agrega el nodo al arreglo para generar una funcion recursiva
  nodoVisitado.add(inicio);
  res.push(inicio)
  console.log(res)
  const destinos = Lista.get(inicio);
  //console.log(nodoVisitado)
  for (const destino of destinos) {
    if (destino === "MALL") {
      console.log(`Se encontro al MALL recorriendo ${res.length} nodos`);
      
      
      return;
    }
    // Condicion de parada
    if (!nodoVisitado.has(destino)) {
      profundidad(destino, nodoVisitado);
      
    }
  }
}

profundidad('0')



