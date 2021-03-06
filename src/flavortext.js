
import {Pokemon} from "./pokemon-api-caller.js";
import $ from "jquery";
import "./display.js";
import {missingNo} from "./display.js";
import "./weight-height-calc.js";
let userInput = "pikachu";
import { userLang } from './main.js'
let userPokemon = new Pokemon();
let result = [];

// flavorTextLookup is one of the major functions to get everything to load on the page

Pokemon.prototype.flavorTextLookup = function(userInput){
  this.pokemonNameCall(userInput);
  this.generateEvolutions(userInput);
  let flavorTextPromise = new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://pokeapi.co/api/v2/pokemon-species/${userInput}`;
    request.onload = function () {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        console.log("Flavor text rejection");
        missingNo();
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });

  flavorTextPromise.then(response => {
    let pokemonText = JSON.parse(response)
    this.flavortext = []; // This is refreshing message whenever we click for the next/previous pokemon display
    // for (let i=0; i <pokemonText.flavor_text_entries.length; i++) {
    for (let i=0; i <pokemonText.flavor_text_entries.length; i++) {
      if (pokemonText.flavor_text_entries[i].language.name === `${userLang}`) {
        this.flavortext.push(pokemonText.flavor_text_entries[i].flavor_text);
        result.push(pokemonText.flavor_text_entries[i].flavor_text);
      }
    }
    this.displayText();
  // $('#pokenow').text(userPokemon.flavortext[Math.floor((Math.random() * userPokemon.flavortext.length ))]);
    // return result[0]
  });

  // nextPokemonPromise.then(response => {
  //   console.log(this.pokemonText);
  //   console.log(this.pokemonText.id);
  // });

}// CLOSING flavor text



// let test = userPokemon.flavortext;
// console.log(test);
// console.log(typeof userPokemon.flavortext);
// console.log(result[0]);
// console.log(userPokemon.flavorTextLookup(userInput));
