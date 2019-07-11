import './styles.css';
import 'bootstrap';
import $ from "jquery";
import "./pokemon-api-caller.js";
import "./flavortext.js";
import "./display.js";
import "./pokemon-cries.js";
import { Pokemon, PokemonListByType } from "./pokemon-api-caller.js";
import './randompokemon.js'
import './teampokemon.js'
import "./weight-height-calc.js";
import { bootUp,blinkingButtons,imgAnimation } from './animations.js';
import "./nextpokemon.js";
import "./language.js";

let testPokemon = new Pokemon();
const evolvesToArray = [];
const evolvesFromArray = [];

Pokemon.prototype.generateEvolutions = function(pokemonName){
  let evolutionPromise = new Promise(function(resolve,reject){
    const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`;
    let request = new XMLHttpRequest();

    request.onload = function(){
      if (this.status === 200) {
        resolve(request.response);
      }else {
        console.log("Rejection!!");
        reject(Error(request.statusText));
      }
    }

    request.open("GET", url, true);
    request.send();
  });

  evolutionPromise.then(response => {
    let pokemonCalled = JSON.parse(response);
      // evolvesFromArray.push(pokemonCalled.evolves_from_species.name);

    let evolutionTreeURL = pokemonCalled.evolution_chain.url;
    console.log(pokemonCalled);
    this.evolvesTo(evolutionTreeURL);

  });



}

Pokemon.prototype.evolvesTo = function(url){
  let evolvesToPromise = new Promise(function(resolve,reject){
    let request = new XMLHttpRequest();

    request.onload = function(){
      if (this.status === 200) {
        resolve(request.response);
      }else {
        console.log("Rejection!!");
        reject(Error(request.statusText));
      }
    }

    request.open("GET", url, true);
    request.send();
  });

  evolvesToPromise.then(response => {
    let evolutionChain = JSON.parse(response);
    console.log(evolutionChain);
    // console.log(evolutionChain.)




  });
}

testPokemon.generateEvolutions("pikachu");
console.log(evolvesFromArray);
