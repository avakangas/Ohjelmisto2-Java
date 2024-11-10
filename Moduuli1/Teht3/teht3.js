'use strict'
function laskeTulos(a, b, c) {
    let summa = a + b + c;
    let tulo = a * b * c;
    let keskiarvo = summa / 3;

    console.log("Lukujen summa: " + summa);
    console.log("Lukujen tulo: " + tulo);
    console.log("Lukujen keskiarvo: " + keskiarvo.toFixed(2));
}

let luku1 = parseInt(prompt("Syötä ensimmäinen luku:"));
let luku2 = parseInt(prompt("Syötä toinen luku:"));
let luku3 = parseInt(prompt("Syötä kolmas luku:"));

if (isNaN(luku1) || isNaN(luku2) || isNaN(luku3)) {
    console.log("Virhe: kaikki syötteet täytyy olla kokonaislukuja!");
} else {
    laskeTulos(luku1, luku2, luku3);
}