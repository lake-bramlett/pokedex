import {Pokemon} from "./pokemon-api-caller.js";
import $ from "jquery";
import "./flavortext.js";

Pokemon.prototype.dPadSelection = function() {
    $(".d-left").click(function() {
      this.flavorTextLookup(this.number - 1);
    });
    $(".d-right").click(function() {
      this.flavorTextLookup(this.number + 1);
    });
}
