import $ from 'jquery'

import {Pokemon, myPokemon} from "./pokemon-api-caller.js";

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

Pokemon.prototype.displayImg = function(){
  let displayArea = $(".sprite-container");
  let img = `<img src='${this.sprite}'>`;
  console.log(`<img src='${this.sprite}'>`);
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
  console.log(flavorArray);
  let typewriter = function(inputArray){
    $(".flavor-text-box").append(flavorArray[i]);
    i++;
    if (i === flavorArray.length) {
      clearInterval(typewriterTimer);
    }
  }

  let typewriterTimer = setInterval(function(){typewriter(flavorArray);}, 70);
  timerArray.push(typewriterTimer);
  /// this is the end of the flavor text display portion

  // this sets the values on the lower display

  
}


$(document).ready(function(){
  $(".button-inner").click(function(){
    let userInput = $("#name").val();
    let newPokemon = new Pokemon();
    newPokemon.flavorTextLookup(userInput);
  })
})
