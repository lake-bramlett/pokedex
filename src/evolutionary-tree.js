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
    let currentPokemon = pokemonCalled.name;
    let evolutionTreeURL = pokemonCalled.evolution_chain.url;
    console.log(pokemonCalled);
    this.evolvesTo(currentPokemon, evolutionTreeURL);

  });



}

Pokemon.prototype.evolvesTo = function(currentPokemon, url){
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


    if(evolutionChain.chain.evolves_to.length > 0 && evolutionChain.chain.evolves_to[0].species.name != currentPokemon){
      evolvesToArray.push(evolutionChain.chain.evolves_to[0].species.name)
    }
    if(evolutionChain.chain.evolves_to[0].evolves_to.length > 0){
      evolvesToArray.push(evolutionChain.chain.evolves_to[0].evolves_to[0].species.name);
    }
    console.log(evolvesToArray);




  });
}

testPokemon.generateEvolutions("charmeleon");
console.log(evolvesFromArray);
