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

function getElementsWithinClass(className) {
  const elementArray = Array.from(document.getElementsByClassName(className));
  return elementArray;
}

function flashDisplay(elementArray, duration) {
  elementArray.forEach(element => (element.style.display = 'none'));
  setTimeout(() => {
    elementArray.forEach(element => (element.style.display = 'initial'));
  }, duration);
}

module.exports = {
  nodeWithinId,
  fischerYatesCopy,
  getElementsWithinClass,
  flashDisplay,
};
