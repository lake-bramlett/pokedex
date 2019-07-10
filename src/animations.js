import $ from "jquery";
import {Pokemon} from "./pokemon-api-caller.js";


export function bootUp () {
  $('.display-screen').removeClass('screen-off').addClass('screen-on');
  $('.sub-screen').removeClass('screen-off').addClass('screen-on');
  $('.sub-screen input').removeClass('screen-off').addClass('screen-on');
  blinkingButtons();
};

export function talkingPokedex () {

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
  switch(this.type[0] || this.type[1]){
    case 'fire':
    case 'dragon':
    case 'bug':
    case 'water':
    case 'ice':
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
    case 'ghost':
      $('.sprite-container img').addClass('shake-ghost')
      setTimeout(function(){$('.sprite-container img').removeClass('shake-ghost')},1000)
      break;
    case 'electric':
      $('.sprite-container img').addClass('zap')
      setTimeout(function(){$('.sprite-container img').removeClass('zap')},1000)
      break;
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
