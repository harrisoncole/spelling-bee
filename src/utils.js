function nodeWithinId(node, id) {
  const target = document.getElementById(`${id}`);
  if (node === target) return true;
  if (node.parentNode) {
    return nodeWithinId(node.parentNode, id);
  } else {
    return false;
  }
}

function fischerYatesCopy(arr) {
  const copy = [...arr];
  let pointer = arr.length,
    temp,
    idx;
  while (pointer) {
    idx = Math.floor(Math.random() * pointer--);
    temp = copy[pointer];
    copy[pointer] = copy[idx];
    copy[idx] = temp;
  }
  return copy;
}

function swapClassNames(oldClassName, newClassName) {
  const htmlCollection = document.querySelectorAll(`.${oldClassName}`);
  for (let i = 0; i < htmlCollection.length; i++) {
    htmlCollection[i].setAttribute('class', newClassName);
  }
}

function getUniqueLetters(word) {
  const seen = new Set();
  let result = '';
  for (let i = 0; i < word.length; i++) {
    let currentLetter = word[i];
    if (!seen.has(currentLetter)) {
      result += currentLetter;
    }
    seen.add(currentLetter);
  }
  return result;
}

function getPoints(word) {
  let points = 1 + word.length - 4;
  if (getUniqueLetters(word).length === 7) {
    points += 7;
  }
  return points;
}

module.exports = {
  nodeWithinId,
  fischerYatesCopy,
  swapClassNames,
  getPoints,
};
