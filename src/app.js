/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const CARDS = [
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
const SYMBOLS = ["♠", "♣", "♥", "♦"];

let randomSymbol = Math.floor(Math.random() * SYMBOLS.length);

window.onload = function() {
  newCard1();
  newCard2();
  newCard3();
  newCard4();
  newCard5();
  newSymbol1();
  newSymbol2();
  newSymbol3();
  newSymbol4();
  newSymbol5();
};

function newCard1() {
  let randomCard = Math.floor(Math.random() * CARDS.length);
  let printedCard = CARDS[randomCard];
  const NUMBER1 = document.querySelector("#number1");
  NUMBER1.innerHTML = printedCard;
}

function newSymbol1() {
  let randomSymbol = Math.floor(Math.random() * SYMBOLS.length);
  let printedSymbol = SYMBOLS[randomSymbol];
  const SYMBOLUP1 = document.querySelector("#symbolUp1");
  const SYMBOLDOWN1 = document.querySelector("#symbolDown1");
  if (printedSymbol == "♥" || printedSymbol == "♦") {
    SYMBOLUP1.style.color = "red";
    SYMBOLDOWN1.style.color = "red";
  }
  SYMBOLUP1.innerHTML = printedSymbol;
  SYMBOLDOWN1.innerHTML = printedSymbol;
}
//    ----card2------------------------------------------------
function newCard2() {
  let randomCard = Math.floor(Math.random() * CARDS.length);
  let printedCard = CARDS[randomCard];
  const NUMBER2 = document.querySelector("#number2");
  NUMBER2.innerHTML = printedCard;
}
function newSymbol2() {
  let randomSymbol = Math.floor(Math.random() * SYMBOLS.length);
  let printedSymbol = SYMBOLS[randomSymbol];
  const SYMBOLUP2 = document.querySelector("#symbolUp2");
  const SYMBOLDOWN2 = document.querySelector("#symbolDown2");
  if (printedSymbol == "♥" || printedSymbol == "♦") {
    SYMBOLUP2.style.color = "red";
    SYMBOLDOWN2.style.color = "red";
  }
  SYMBOLUP2.innerHTML = printedSymbol;
  SYMBOLDOWN2.innerHTML = printedSymbol;
}
// ---card3-----------------------
function newCard3() {
  let randomCard = Math.floor(Math.random() * CARDS.length);
  let printedCard = CARDS[randomCard];
  const NUMBER3 = document.querySelector("#number3");
  NUMBER3.innerHTML = printedCard;
}
function newSymbol3() {
  let randomSymbol = Math.floor(Math.random() * SYMBOLS.length);
  let printedSymbol = SYMBOLS[randomSymbol];
  const SYMBOLUP3 = document.querySelector("#symbolUp3");
  const SYMBOLDOWN3 = document.querySelector("#symbolDown3");
  if (printedSymbol == "♥" || printedSymbol == "♦") {
    SYMBOLUP3.style.color = "red";
    SYMBOLDOWN3.style.color = "red";
  }
  SYMBOLUP3.innerHTML = printedSymbol;
  SYMBOLDOWN3.innerHTML = printedSymbol;
}
// ---card4-------------------------------------------------------------------------------------
function newCard4() {
  let randomCard = Math.floor(Math.random() * CARDS.length);
  let printedCard = CARDS[randomCard];
  const NUMBER4 = document.querySelector("#number4");
  NUMBER4.innerHTML = printedCard;
}
function newSymbol4() {
  let randomSymbol = Math.floor(Math.random() * SYMBOLS.length);
  let printedSymbol = SYMBOLS[randomSymbol];
  const SYMBOLUP4 = document.querySelector("#symbolUp4");
  const SYMBOLDOWN4 = document.querySelector("#symbolDown4");
  if (printedSymbol == "♥" || printedSymbol == "♦") {
    SYMBOLUP4.style.color = "red";
    SYMBOLDOWN4.style.color = "red";
  }
  SYMBOLUP4.innerHTML = printedSymbol;
  SYMBOLDOWN4.innerHTML = printedSymbol;
}
// ----card5---------------------------------------------------------------------------------
function newCard5() {
  let randomCard = Math.floor(Math.random() * CARDS.length);
  let printedCard = CARDS[randomCard];
  const NUMBER5 = document.querySelector("#number5");
  NUMBER5.innerHTML = printedCard;
}
function newSymbol5() {
  let randomSymbol = Math.floor(Math.random() * SYMBOLS.length);
  let printedSymbol = SYMBOLS[randomSymbol];
  const SYMBOLUP5 = document.querySelector("#symbolUp5");
  const SYMBOLDOWN5 = document.querySelector("#symbolDown5");

  if (printedSymbol == "♥" || printedSymbol == "♦") {
    SYMBOLUP5.style.color = "red";
    SYMBOLDOWN5.style.color = "red";
  }
  SYMBOLUP5.innerHTML = printedSymbol;
  SYMBOLDOWN5.innerHTML = printedSymbol;
}
// ---------------------------eventButton----------------
// function generateRandomCard() {
//   const BUTTON = document.querySelector("#theMasterButton");
//   BUTTON.addEventListener("click", event => {});
// }
