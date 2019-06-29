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

function objWithinArrIncludes(arr, key, value) {
  for (let i = 0; i < arr.length; i++) {
    let currentObj = arr[i];
    if (currentObj[key] === value) return true;
  }
  return false;
}

function moveElementVertically(element, percentage) {
  element.style.transform = `translate(0, ${percentage}%)`;
}

module.exports = {
  nodeWithinId,
  fischerYatesCopy,
  swapClassNames,
  objWithinArrIncludes,
  moveElementVertically,
};
