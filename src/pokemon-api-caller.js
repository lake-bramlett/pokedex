export class Pokemon{
  constructor() {
    this.name = "name";
    this.number = "number";
    this.sprite = "sprite";
    this.flavortext = "flavortext";
    this.type = [];
    this.height = "height";
    this.weight = "weight";
  }

//   pokemonNameCall(pokemonName){
//     let pokeNamePromise = new Promise(function(resolve,reject){
//       const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
//       let request = new XMLHttpRequest();
//
//       request.onload = function(){
//         if (this.status === 200) {
//           console.log("Api responded!");
//           resolve(request.response);
//         }else {
//           console.log("Rejection!!");
//           reject(Error(request.statusText));
//         }
//       }
//
//       request.open("GET", url, true);
//       request.send();
//     });
//
//     pokeNamePromise.then(response => {
//       let pokemonCalled = JSON.parse(response);
//       console.log(pokemonCalled);
//       this.name = pokemonCalled.name;
//       this.number = pokemonCalled.id;
//       this.sprite = pokemonCalled.sprites.front_default;
//       this.flavortext = "";
//       // pushing each type to the this.type array;
//       pokemonCalled.types.forEach(function(arrayItem){
//         this.type.push(arrayItem.type.name);
//       })
//       this.height = pokemonCalled.height;
//       this.weight = pokemonCalled.weight;
//       console.log(this);
//
//     })
//
//   }
//
//
//
//   pokemonSpeciesCall(pokemonName){
//     let pokeSpeciesPromise = new Promise(function(resolve,reject){
//       const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`;
//       let request = new XMLHttpRequest();
//
//       request.onload = function(){
//         if (this.status === 200) {
//           console.log("Api responded!");
//           resolve(request.response);
//         }else {
//           console.log("Rejection!!");
//           reject(Error(request.statusText));
//         }
//       }
//
//       request.open("GET", url, true);
//       request.send();
//     });
//
//     pokeSpeciesPromise.then(response =>{
//       let pokemonCalled = JSON.parse(response);
//       console.log(pokemonCalled);
//       return pokemonCalled;
//     })
//
//   }
//
//
//
//   pokemonTypeCall(pokemonType){
//     let pokeTypePromise = new Promise(function(resolve,reject){
//       const url = `https://pokeapi.co/api/v2/type/${pokemonType}`;
//       let request = new XMLHttpRequest();
//
//       request.onload = function(){
//         if (this.status === 200) {
//           console.log("Api responded!");
//           resolve(request.response);
//         }else {
//           console.log("Rejection!!");
//           reject(Error(request.statusText));
//         }
//       }
//
//       request.open("GET", url, true);
//       request.send();
//     });
//
//     pokeTypePromise.then(response => {
//       let typelistCalled = JSON.parse(response);
//       console.log(typelistCalled);
//       return typelistCalled;
//     })
//
//   }
// }
//
// const myPokemon = new Pokemon();
//
// myPokemon.pokemonNameCall("charmander");
