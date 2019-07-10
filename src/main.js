import './styles.css';
import 'bootstrap';
import $ from "jquery";
import "./pokemon-api-caller.js";
import "./flavortext.js";
import "./display.js";
import "./pokemon-cries.js";
import { Pokemon } from "./pokemon-api-caller.js";
import './randompokemon.js'
import './teampokemon.js'
import "./weight-height-calc.js";
import { bootUp,blinkingButtons,imgAnimation } from './animations.js';




$(document).ready(function() {
  $('.sprite-container').mouseover(console.log('mouseover'))
  setTimeout(function(){
    bootUp();
  }, 3000);
  $('.d-center').click(function(){
    let pokemonSearch = new Pokemon();
    let name = $('#name').val().toLowerCase();
    pokemonSearch.flavorTextLookup(name);
    console.log(pokemonSearch)
    $('.display-screen').click(function(){
      displayImg(pokemonSearch)
      console.log('trying to display')
    });

  });
  $('.sprite-container').on('click', function(){
    console.log('clicked');
    pokemonSearch.imgAnimation();
  });
});
