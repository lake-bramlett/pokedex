import './styles.css';
import 'bootstrap';
import $ from "jquery";
import "./pokemon-api-caller.js";
import "./flavortext.js";
import "./display.js";
import { Pokemon } from "./pokemon-api-caller.js";
import { displayImg } from './display.js';
import { bootUp,blinkingButtons } from './animations.js';




$(document).ready(function() {
  setTimeout(function(){
    bootUp();
  }, 3000);
  $('.d-center').click(function(){
    let pokemonSearch = new Pokemon();
    let name = $('#name').val();
    pokemonSearch.pokemonNameCall(name);
    console.log(pokemonSearch)
    $('.display-screen').click(function(){
      displayImg(pokemonSearch)
      console.log('trying to display')
    });

  });
});
