import "/workspace/GENERADOR-DE-CARTAS-ALEATORIO/src/style.css";
window.onload = function cartaRandom() {
  const topPalo = document.querySelector("#toppalo");
  const numero = document.querySelector("#randomnumber");
  const bottomPalo = document.querySelector("#bottompalo");
  const botonGenerador = document.querySelector("#boton");

  let listaPoker = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let palos = ["♦", "♥", "♠", "♣"];

  generadorCartasAleatorias();

  function valorRandom(array) {
    let numeroAleatorio = Math.floor(Math.random() * array.length);
    return array[numeroAleatorio];
  }

  function generadorCartasAleatorias() {
    let paloRandom = valorRandom(palos);
    let numeroRandom = valorRandom(listaPoker);

    topPalo.innerHTML = paloRandom;
    numero.innerHTML = numeroRandom;
    bottomPalo.innerHTML = paloRandom;

    if (paloRandom == palos[0] || paloRandom == palos[1]) {
      topPalo.style.color = "red";
      bottomPalo.style.color = "red";
    } else {
      topPalo.style.color = "black";
      bottomPalo.style.color = "black";
    }
  }
  let ancho = document.querySelector("#ancho");
  let alto = document.querySelector("#alto");
  const caja = document.querySelector("#carta");
  ancho.addEventListener("change", evento => {
    caja.style.width = `${evento.target.value}px`;
  });
  alto.addEventListener("change", evento => {
    caja.style.height = `${evento.target.value}px`;
  });

  botonGenerador.addEventListener("click", generadorCartasAleatorias);
  setInterval(function() {
    generadorCartasAleatorias();
  }, 10000);
};
