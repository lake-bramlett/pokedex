import $ from 'jquery'

import {Pokemon, myPokemon} from "./pokemon-api-caller.js";

Pokemon.prototype.displayImg = function(pokemon){
  let displayArea = $(".sprite-container");
  let img = `<img src='${this.sprite}'>`;
  // console.log(`<img src='${this.sprite}'>`);
  displayArea.html(img);
}
