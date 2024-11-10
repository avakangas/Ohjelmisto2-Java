'use strict';

const koirat = [];

for (let i = 0; i < 6; i++) {
  const koira = prompt(`Anna koiran ${i+1} nimi`);
  koirat.push(koira);
}

koirat.sort();
koirat.reverse();

console.log(koirat);

for (let koira of koirat) {
  const koodi = `<li>${koira}</li>`;
  document.querySelector('#target').innerHTML += koodi;
}
