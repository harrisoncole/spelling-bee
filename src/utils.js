function nodeWithinId(node, id) {
  const target = document.getElementById(`${id}`);
  if (node === target) return true;
  if (node.parentNode) {
    return nodeWithinId(node.parentNode, id);
  } else {
    return false;
  }
}

module.exports = {
  nodeWithinId,
};
