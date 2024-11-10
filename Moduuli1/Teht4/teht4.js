'use strict'

function lajitteluhattu(){
  const nimi = prompt("Anna nimesi:")
  const numero = Math.floor(Math.random()*4)+1;
  let luokka = "";

  if (numero === 1){
    luokka = "Gryffindor";
  } else if (numero === 2){
    luokka = "Luihuinen";
  } else if(numero === 3){
    luokka = "Korpinkynsi";
  }
  console.log(`${nimi}, olet ${luokka}.`)
}

lajitteluhattu();
