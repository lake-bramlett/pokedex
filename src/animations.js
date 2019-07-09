import $ from "jquery";

export function bootUp () {
  $('.display-screen').removeClass('screen-off').addClass('screen-on');
  $('.sub-screen').removeClass('screen-off').addClass('screen-on');
  $('.sub-screen input').removeClass('screen-off').addClass('screen-on');
};
