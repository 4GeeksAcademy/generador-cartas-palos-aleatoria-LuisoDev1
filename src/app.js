import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const arrayPalos = ["♦","♥","♠","♣"];
  const arrayNumeros = ["A",2,3,4,5,6,7,8,9,"J","Q","K"];

  //FUNSION PARA GENERAR PALOS ALEATORIOS
  const generadorAleatorio = (array) => {

    let paloAleatorio = Math.floor(Math.random() * array.length);
    return array[paloAleatorio];
  }

  let obtenerPalo = generadorAleatorio(arrayPalos);
  let paloSuperior = document.querySelector(".palo-superior");
  let paloInferior = document.querySelector(".palo-inferior");
  if(obtenerPalo == "♦" || obtenerPalo == "♥") {
    paloSuperior.style.color = "red";
    paloInferior.style.color = "red";
  }
  paloSuperior.textContent = obtenerPalo;
  paloInferior.textContent = obtenerPalo;


   let obtenerNumero = generadorAleatorio(arrayNumeros);
   let cuerpoNumero = document.querySelector(".cuerpo-numero");
   cuerpoNumero.textContent = obtenerNumero;

};


