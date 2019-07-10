import {Pokemon} from "./pokemon-api-caller.js";
import $ from "jquery";
import {displayPokemon,currentTeam} from './main.js';

// let pokemonName = "charmander"
// ~~~~~~~~~~~~~~~ construction of class and calling that class ~~~~~~~~~~~~~~~~
export class PokemonTeam {
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

  displayTeam() {
    $(".list-display").show();
    $(".list-display").text("");
    $(".display-screen .sprite-container").hide();
    $(".display-screen .flavor-text-box").hide();
    $(".add-team-box").hide();

    for (let i = 0; i < this.roster.length; i++) {
      $(".list-display").append(`<p class = "${this.roster[i].name}">${this.roster[i].name}</p>`);
      $(`.${this.roster[i].name}`).click(()=>{
        displayPokemon.name = this.roster[i].name;
        console.log(displayPokemon.name);
        displayPokemon.flavorTextLookup(this.roster[i].name);

       });
    }
  }

}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
