import $ from "jquery";
import {Pokemon} from "./pokemon-api-caller.js";
import "./display.js";


export function bootUp () {
  $('.display-screen').removeClass('screen-off').addClass('screen-on');
  $('.sub-screen').removeClass('screen-off').addClass('screen-on');
  $('.sub-screen input').removeClass('screen-off').addClass('screen-on');
  blinkingButtons();
};

export function talkingPokedex (flavorArray,i) {
  if (flavorArray[i] === ' ') {
    $('.button .button-inner').toggleClass('pokedex-off pokedex-on');
  } else if (i === flavorArray.length) {
    $('.button .button-inner').toggleClass('pokedex-off pokedex-on');
  }
};

export function blinkingButtons () {
  setInterval(function() {
    $('.button-container-top .tiny-button.red').toggleClass('red-blink-off red-blink-on');
  }, 2000);
  setInterval(function() {
    $('.button-container-top .tiny-button.yellow').toggleClass('yellow-blink-off yellow-blink-on');
  }, 3000);
  setInterval(function() {
    $('.button-container-top .tiny-button.green').toggleClass('green-blink-off green-blink-on');
  }, 4000);
};



Pokemon.prototype.imgAnimation = function () {
  switch(this.type[0] || this.type[1]){ //main type is run first
    case 'fire':
      $('.sprite-container img').addClass('shake-fire')
      setTimeout(function(){$('.sprite-container img').removeClass('shake-fire')},1000)
      break;
    case 'dragon':
      $('.sprite-container img').addClass('shake-dragon')
      setTimeout(function(){$('.sprite-container img').removeClass('shake-dragon')},1000)
      break;
    case 'bug':
    case 'grass':
      $('.sprite-container img').addClass('shake-grass')
      setTimeout(function(){$('.sprite-container img').removeClass('shake-grass')},1000)
      break;
    case 'water':
    case 'ice':
      $('.sprite-container img').addClass('swim')
      setTimeout(function(){$('.sprite-container img').removeClass('swim')},1000)
      break;
    case 'normal':
      $('.sprite-container img').addClass('shake')
      setTimeout(function(){$('.sprite-container img').removeClass('shake')},1000)
      break;
    case 'flying':
      $('.sprite-container img').addClass('slide-from-top')
      setTimeout(function(){$('.sprite-container img').removeClass('slide-from-top')},1000)
      break;
    case 'ground':
      $('.sprite-container img').addClass('slide-from-bottom')
      setTimeout(function(){$('.sprite-container img').removeClass('slide-from-bottom')},1000)
      break;
    case 'poison':
      $('.sprite-container img').addClass('shake-poison')
      setTimeout(function(){$('.sprite-container img').removeClass('shake-poison')},1000)
      break;
    case 'ghost':
      $('.sprite-container img').addClass('shake-ghost')
      setTimeout(function(){$('.sprite-container img').removeClass('shake-ghost')},1000)
      break;
    case 'electric':
      $('.sprite-container img').addClass('zap')
      setTimeout(function(){$('.sprite-container img').removeClass('zap')},1000)
      break;
    case 'rock':
    case 'fighting':
      $('.sprite-container img').addClass('slide-fwd')
      setTimeout(function(){$('.sprite-container img').removeClass('slide-fwd')},1000)
      break;
    default:
      $('.sprite-container img').addClass('rotate-center')
      setTimeout(function(){$('.sprite-container img').removeClass('rotate-center')},1000)
      break;
  }
  this.playSound();
}
