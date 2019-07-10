import {Pokemon} from "./pokemon-api-caller.js";
import $ from "jquery";

// let pokemonName = "charmander"
// ~~~~~~~~~~~~~~~ construction of class and calling that class ~~~~~~~~~~~~~~~~
class PokemonTeam {
  constructor() {
    this.roster = [];
    this.id = 0;
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

    promise.then((response)=> {
      const body = JSON.parse(response);
      this.id++;
      body.id = this.id;
      this.roster.push(body);
    });
  }

}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const currentTeam = new PokemonTeam();

function removePokemon(id) {
  // if (currentTeam.roster.includes(pokemonName)) {
  //   currentTeam.roster.splice(i,1);
  // }

  for (let i = 0; i < currentTeam.roster.length; i++) {
    console.log(currentTeam.roster.length);
    console.log(currentTeam.roster[i].id === id);
    if (currentTeam.roster[i].id === id) {
      return currentTeam.roster.splice(i,1);
      // console.log(currentTeam.roster);
    } else {
      console.log( "That pokemon is not in your roster.");
    }
  }
}

// currentTeam.addPokemon("pikachu");
// currentTeam.addPokemon("charmander");
// currentTeam.addPokemon("snorlax");
// currentTeam.addPokemon("charizard");
// currentTeam.addPokemon("snorlax");
// currentTeam.addPokemon("charmander");
// currentTeam.addPokemon("pikachu");
// currentTeam.addPokemon("charmander");
// currentTeam.addPokemon("snorlax");
// currentTeam.addPokemon("charizard");
// currentTeam.addPokemon("snorlax");
// currentTeam.addPokemon("charmander");
// currentTeam.addPokemon("pikachu");
// currentTeam.addPokemon("charmander");
// currentTeam.addPokemon("snorlax");
// currentTeam.addPokemon("charizard");
// currentTeam.addPokemon("snorlax");
// currentTeam.addPokemon("charmander");
// // currentTeam.addPokemon("beedrill");
//
// setTimeout(function(){removePokemon(1)}, 1000);
// setTimeout(function(){removePokemon(2)}, 1000);
// setTimeout(function(){removePokemon(3)}, 1000);
// setTimeout(function(){removePokemon(4)}, 1000);
// currentTeam.addPokemon("charizard");
// currentTeam.addPokemon("snorlax");
// currentTeam.addPokemon("charmander");
// setTimeout(function(){removePokemon(12)}, 1000);
//
// setTimeout(function(){console.log(currentTeam.roster)}, 7000);
