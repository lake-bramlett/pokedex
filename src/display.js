import $ from 'jquery'
import "./weight-height-calc.js";
import {flavorTextLookup} from "./flavortext.js";
import {Pokemon, myPokemon, PokemonListByType} from "./pokemon-api-caller.js";
import {talkingPokedex} from "./animations.js"

// this controls timers for the displayText function
const timerArray = [];

let typeWriter = (txt) => {
  let i = 0;
  let text = txt;
  let speed = 50;
  console.log('got here' + `${this.flavortext}`)
  if (i < txt.length) {
    document.getElementById("#text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

export function convertWeight(inputWeight){
  let newWeight = inputWeight*(0.1);
  return newWeight.toFixed(1);
}

export function convertHeight (inputHeight){
  let newHeight = inputHeight*(0.1);
  return newHeight.toFixed(1);
}



Pokemon.prototype.displayImg = function(){
  $(".list-display").hide();
  $(".display-screen .sprite-container").show();
  $(".display-screen .flavor-text-box").show();
  let displayArea = $(".sprite-container");
  let img = `<img src='${this.sprite}'>`;
  // console.log(`<img src='${this.sprite}'>`);
  displayArea.html(img);
}

Pokemon.prototype.displayText = function(){

  // this prints the flavor text to the display
  // the timer array is important so that the text doesn't print out multiple times on the page, it's really funny but shouldn't be a feature
  timerArray.forEach(function(entry){
    clearInterval(entry);
  });

  $(".flavor-text-box").text("");
  let i = 0;
  let flavorArray = Array.from(this.flavortext[0]);
  let typewriter = function(inputArray){
    $(".flavor-text-box").append(flavorArray[i]);
    i++;
    talkingPokedex (flavorArray,i);
    if (i === flavorArray.length) {
      clearInterval(typewriterTimer);
    }
  }

  let typewriterTimer = setInterval(function(){typewriter(flavorArray);}, 70);
  timerArray.push(typewriterTimer);
  /// this is the end of the flavor text display portion

  // this sets the values on the lower display

}

Pokemon.prototype.displayStats = function(){
  $("#name").val(`${this.name}`);
  $(".type-1").val(`${this.type[0]}`);
  if(this.type[1] != undefined){
    $(".type-2").val(`${this.type[1]}`);
  }

  $(".height-block .output").text(convertHeight(`${this.height}`) + "m");
  $(".weight-block .output").text(convertWeight(`${this.weight}`) + "kg");
}

// this displays a list of pokemon by type to the display image

PokemonListByType.prototype.displayList = function(){
  $(".list-display").show();
  $(".list-display").text("");
  $(".display-screen .sprite-container").hide();
  $(".display-screen .flavor-text-box").hide();
  this.list.forEach((listItem)=>{
    $(".list-display").append(`<p class = "${listItem}">${listItem}</p>`);
    $(`.${listItem}`).click(()=>{
      let listPokemon = new Pokemon();
      console.log(listPokemon);
      listPokemon.flavorTextLookup(`${listItem}`);

     });
  });
}

// just for testing
$(document).ready(function(){
  $(".type-1").change(function(){
    $(".type-2").val("");
    console.log("working");
    let selectedType = $('.type-1 option:selected').val();
    console.log(selectedType);
    // let userInput = $("#name").val();
    // let newPokemon = new Pokemon();
    // newPokemon.flavorTextLookup(userInput);
    let myPokemonList = new PokemonListByType();

    myPokemonList.pokemonTypeCall(`${selectedType}`);
    console.log(myPokemonList);

  });
});
