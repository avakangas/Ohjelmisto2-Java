'use strict';

let numerot = [];

while (true) {

    let numero = parseInt(prompt("Anna numero (tai 0 lopettaaksesi):"));

    if (numero === 0) {
        break;
    }

    numerot.push(numero);
}

numerot.sort((a, b) => b - a);

console.log("Numerot suurimmasta pienimpään:");
numerot.forEach(num => {
    console.log(num);
});
