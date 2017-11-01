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
  var kittens2 = [name, ...kittens]
}
