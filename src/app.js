/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".card").classList.add(crearPaloRandom());
  document.querySelector(".card").innerHTML = crearNumeroRandom();
};

let crearNumeroRandom = () => {
  let numero = Math.floor(Math.random() * listaPoker.length);
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
  return listaPoker[numero];
};

let crearPaloRandom = () => {
  let numero = Math.floor(Math.random() * palos.length);
  let palos = ["picas", "diamantes", "corazones", "treboles"];
  return palos[numero];
};
