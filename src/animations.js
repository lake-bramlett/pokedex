import $ from "jquery";

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
