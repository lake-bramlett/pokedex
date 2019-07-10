import {Pokemon} from "./pokemon-api-caller.js";
import $ from "jquery";
import "./flavortext.js";

Pokemon.prototype.dPadSelection = function() {
  console.log("d pad selection is working");
    $(".d-left").click( () => { //with function(), this is pointing d-left. This is scope issue ...
      console.log(this);
      console.log("d pad clicked!");
      this.flavorTextLookup(this.number - 1);
    });
    $(".d-right").click( () => { //with =>, this is pointing Pokemon.prototype.
      console.log(this);
      console.log("d pad clicked!");
      this.flavorTextLookup(this.number + 1);
    });
}
