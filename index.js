const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function appendKitten(name){
  var exArray = [...kittens, name]
  return exArray
}

function prependKitten(name){
  var newArray = [name, ...kittens]
  return newArray
}

function removeLastKitten(){
  kitten.slice(-1)
}
