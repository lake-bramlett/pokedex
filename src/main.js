import './styles.css';
import 'bootstrap';
import $ from "jquery";
import "./pokemon-api-caller.js";
import "./flavortext.js";
import "./display.js";
import "./pokemon-cries.js";
import { Pokemon, PokemonListByType } from "./pokemon-api-caller.js";
import './randompokemon.js'
import { PokemonTeam } from './teampokemon.js';
import './teampokemon.js';
import "./weight-height-calc.js";
import { bootUp,blinkingButtons,imgAnimation } from './animations.js';
import "./nextpokemon.js";
import "./language.js";
export let userLang = "en";
// this controls the random pokemon of the day
let today = new Date();
let pokemonIndex = parseInt((today.getTime()/8.64e+7)%151);
export let displayPokemon = new Pokemon();
export const currentTeam = new PokemonTeam();

$(document).ready(function() {

  // boot up animation
  setTimeout(function(){
    bootUp();
  }, 3000);

  // this delays the load of the initial pokemon
  setTimeout(function(){
    displayPokemon.flavorTextLookup(pokemonIndex);
  }, 5000)

  $('#name-form').submit(function(event){
    event.preventDefault()
    console.log('form submitted');

    let name = $('#name').val().toLowerCase();
    userLang = $('#language').val();
    displayPokemon.flavorTextLookup(name);

  });
  $('.sprite-container').on('click', function(){
    console.log('clicked');
    console.log(displayPokemon.name);
    if (currentTeam.roster.length < 6) {
      currentTeam.addPokemon(displayPokemon.name);  
    }
    console.log(currentTeam.roster);
    displayPokemon.imgAnimation();
  });

    // this controls the type selection and list display
  $(".type-1").change(function(){
    $(".type-2").val("");
    let selectedType = $('.type-1 option:selected').val();
    let myPokemonList = new PokemonListByType();
    console.log("Type selection change");
    myPokemonList.pokemonTypeCall(`${selectedType}`);

  });

    // this controls the other type selector
  $(".type-2").change(function(){
    $(".type-1").val("");
    let selectedType = $('.type-2 option:selected').val();
    let myPokemonList = new PokemonListByType();
    console.log("Type selection change");
    myPokemonList.pokemonTypeCall(`${selectedType}`);
  });

  //display team list
  $('.team-button').click(function(){
    currentTeam.displayTeam();
  });

});
