const isMirror = (nodeL, nodeR) => {
  if (!nodeL && !nodeR) return true;
  if (!nodeL || !nodeR) return false;
  
  return (
    nodeL.val === nodeR.val &&
    isMirror(nodeL.left, nodeR.right) &&
    isMirror(nodeL.right, nodeR.left)
  );
}

const isSymmetric = (node) => {
  if (!node) return true;
  return isMirror(node.left, node.right);
}