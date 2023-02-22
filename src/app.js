/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { read } from "@popperjs/core";

const toppalo = document.querySelector(".toppalo");
const numero = document.querySelector(".numero");
const bottompalo = document.querySelector(".bottompalo");
window.onload = () => {
  toppalo.innerHTML = newPalo;
  numero.innerHTML = crearNumeroRandom();
  bottompalo.innerHTML = newPalo;
  //setTimeout(100000);
};

let crearNumeroRandom = () => {
  let numero = Math.floor(Math.random() * 13);
  let listaPoker = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  return listaPoker[numero];
};

let crearPaloRandom = () => {
  let numero = Math.floor(Math.random() * 4);
  let palos = ["♦", "♥", "♠", "♣"];
  if (palos === [0] || palos === [1]) {
    palos.style.color = "red";
  } else if (palos === [2] || palos === [3]) {
    palos.style.color = "black";
  }
  return palos[numero];
};
let newPalo = crearPaloRandom();
let botongenerador = document.querySelector("#boton");
botongenerador.addEventListener("click", () => {
  toppalo.innerHTML = crearPaloRandom();
  numero.innerHTML = crearNumeroRandom();
  bottompalo.innerHTML = crearPaloRandom();
});
