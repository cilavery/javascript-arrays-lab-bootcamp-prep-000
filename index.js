const app = "I don't do much."
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

functions destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var moreKittens = [...kittens,name]
  return moreKittens
}

function prependKitten(name) {
  var moreKittens = [name, ...kittens]
  return moreKittens
}

function removeLastKitten() {
  return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
