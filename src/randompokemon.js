import {Pokemon} from "./pokemon-api-caller.js";
import $ from "jquery";

let today = new Date();
let pokemonIndex = parseInt((today.getTime()/8.64e+7)%151);
let pokemonofToday = new Pokemon

Pokemon.prototype.randomPokemon = function(pokemonIndex){
  let randomPokemonPromise = new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`;
    request.onload = function () {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });

  randomPokemonPromise.then(response => {
    let randomPokemon = JSON.parse(response)
    console.log(Object.entries(randomPokemon));
    console.log(randomPokemon.forms[0].name);
    console.log(randomPokemon.forms[0].url);
  $('#todaypokemon').text(randomPokemon.forms[0].name + " " + randomPokemon.forms[0].url);
  });
}

pokemonofToday.randomPokemon(pokemonIndex);
