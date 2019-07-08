
import {Pokemon} from "./pokemon-api-caller.js";
import $ from "jquery";
let userInput = "charmander";
let userLang = "en";
let userPokemon = new Pokemon();
let result = [];

Pokemon.prototype.flavorTextLookup = function(userInput){
  // this.pokemonNameCall(userInput)
  let flavorTextPromise = new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://pokeapi.co/api/v2/pokemon-species/${userInput}`;
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

  flavorTextPromise.then(response => {
    let pokemonText = JSON.parse(response)
    // for (let i=0; i <pokemonText.flavor_text_entries.length; i++) {
    for (let i=0; i <pokemonText.flavor_text_entries.length; i++) {
      if (pokemonText.flavor_text_entries[i].language.name === `${userLang}`) {
        this.flavortext.push(pokemonText.flavor_text_entries[i].flavor_text);
        result.push(pokemonText.flavor_text_entries[i].flavor_text);
      }
    }
  $('#pokenow').text(userPokemon.flavortext[0]);
    // return result[0]
  });
}// CLOSING flavor text

userPokemon.flavorTextLookup(userInput);
// let test = userPokemon.flavortext;
// console.log(test);
// console.log(typeof userPokemon.flavortext);
// console.log(result[0]);
// console.log(userPokemon.flavorTextLookup(userInput));
