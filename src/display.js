import $ from 'jquery'

export function displayImg(pokemon){
  let displayArea = $(".display-screen");
  let img = `<img src='${pokemon.sprite}'>`;
  console.log(`<img src='${pokemon.sprite}'>`)
  displayArea.html(img)
}
