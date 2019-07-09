import $ from 'jquery'

import {Pokemon, myPokemon} from "./pokemon-api-caller.js";

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
  // let textDisplay = $(".flavor-text-box");
  // console.log(`${this.flavortext}`)
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



  // $('.flavor-text-box').append(`<p>${this.flavortext[0]}</p>`);
  // let flavorText = 'this is flavor text'
  // typeWriter(flavorText)
  // textDisplay.html(text)
}


$(document).ready(function(){
  $(".button-inner").click(function(){
    let userInput = $("#name").val();
    let newPokemon = new Pokemon();
    newPokemon.flavorTextLookup(userInput);
  })
})
