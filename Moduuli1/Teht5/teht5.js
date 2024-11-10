'use strict';

function karkausvuosi() {
  const vuosi = parseInt(prompt("Anna vuosiluku:"));

  if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0)) {
    console.log(vuosi + " on karkausvuosi.");
  } else {
    console.log(vuosi + " ei ole karkausvuosi.");
  }
}

karkausvuosi();