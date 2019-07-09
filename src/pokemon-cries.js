import {Pokemon} from "./pokemon-api-caller.js";
import $ from "jquery";


Pokemon.prototype.playSound = function(){
  let cry = new Audio(`../audio/${this.number}.ogg`);
  $("img").click(function(){
    cry.play();
  })

}
