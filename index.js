const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  return cats.push(name);
}

function destructivelyPrependCat(name) {
  return cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
  return cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
  return cats.shift(name);
}

function appendCat(copyOfCats) {
  copyOfCats = cats.slice();
  copyOfCats.push("Broom");
  return copyOfCats;
}

function prependCat(copyOfCats) {
  copyOfCats = cats.slice();
  copyOfCats.unshift("Arnold");
  return copyOfCats;
}

function removeLastCat(copyOfCats) {
  copyOfCats = [...cats];
  copyOfCats.pop();
  return copyOfCats;
}

function removeFirstCat(copyOfCats) {
  copyOfCats = [...cats];
  copyOfCats.shift();
  return copyOfCats;
}