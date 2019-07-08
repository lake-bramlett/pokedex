export class Pokemon{
  constructor() {
    this.name = "name";
    this.number = "number";
    this.sprite = "sprite";
    this.flavortext = [];
    this.type = [];
    this.height = "height";
    this.weight = "weight";
  }


  pokemonNameCall(pokemonName){
    let pokeNamePromise = new Promise(function(resolve,reject){
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
      let request = new XMLHttpRequest();

      request.onload = function(){
        if (this.status === 200) {
          console.log("Api responded!");
          resolve(request.response);
        }else {
          console.log("Rejection!!");
          reject(Error(request.statusText));
        }
      }

      request.open("GET", url, true);
      request.send();
    });

    pokeNamePromise.then(response => {
      let pokemonCalled = JSON.parse(response);
      console.log(pokemonCalled);
      this.name = pokemonCalled.name;
      this.number = pokemonCalled.id;
      this.sprite = pokemonCalled.sprites.front_default;
      this.flavortext = "";
      // pushing each type to the this.type array;
      for (let i = 0; i < pokemonCalled.types.length; i++) {
          this.type.push(pokemonCalled.types[i].type.name);
      }
      this.height = pokemonCalled.height;
      this.weight = pokemonCalled.weight;

      // this is where the front end functions are called

      //

    })

  }
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

}

export class PokemonListByType {
  constructor(){
    this.list = [];
  }
    pokemonTypeCall(pokemonType){
      let pokeTypePromise = new Promise(function(resolve,reject){
        const url = `https://pokeapi.co/api/v2/type/${pokemonType}`;
        let request = new XMLHttpRequest();

        request.onload = function(){
          if (this.status === 200) {
            console.log("Api responded!");
            resolve(request.response);
          }else {
            console.log("Rejection!!");
            reject(Error(request.statusText));
          }
        }

        request.open("GET", url, true);
        request.send();
      });

      pokeTypePromise.then(response => {
        let typeResponse = JSON.parse(response);
        for (let i = 0; i < typeResponse.pokemon.length; i++) {
          // only pushing pokemon from the first 151 to the list

          if (parseInt(typeResponse.pokemon[i].pokemon.url.slice(34, -1)) <= 151) {
            this.list.push(typeResponse.pokemon[i].pokemon.name);
          }
        }
      })

    }
}


// const myPokemon = new Pokemon();
//
// myPokemon.pokemonNameCall("charizard");
// console.log(myPokemon);
//
// const myPokemonList = new PokemonListByType();
// myPokemonList.pokemonTypeCall("fire");
// console.log(myPokemonList);
