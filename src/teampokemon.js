import {Pokemon} from "./pokemon-api-caller.js";
import $ from "jquery";

// let pokemonName = "charmander"
// ~~~~~~~~~~~~~~~ construction of class and calling that class ~~~~~~~~~~~~~~~~
class PokemonTeam {
  constructor() {
    this.roster = [];
  }

  addPokemon(pokemonName) {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
      request.onload = function() {
        if(this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      const body = JSON.parse(response);
      currentTeam.roster.push(body.forms[0].name);
    });
  }

}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const currentTeam = new PokemonTeam();

function removePokemon(pokemonName) {
  for (let i = 0; i < currentTeam.roster.length; i++) {
    console.log(currentTeam.roster.length);
    console.log(currentTeam.roster[i] === pokemonName);
    if (currentTeam.roster[i] === pokemonName) {
      currentTeam.roster.splice(i,1);
      // console.log(currentTeam.roster);
    } else {
      console.log( "That pokemon is not in your roster.");
    }
  }
}

currentTeam.addPokemon("snorlax");
currentTeam.addPokemon("snorlax");
currentTeam.addPokemon("snorlax");
currentTeam.addPokemon("charmander");
currentTeam.addPokemon("beedrill");
console.log(currentTeam);
setTimeout(function(){removePokemon("snorlax")}, 2000);
setTimeout(function(){console.log(currentTeam.roster)}, 7000);
