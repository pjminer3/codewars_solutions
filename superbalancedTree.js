class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function isSuperbalanced(root) {
  // input: binary tree
  // output; boolean
  // edge cases: root is null, tree has < two leafs
  // constraints: none
  
  // edge cases
  if (!root || !root.left && !root.right) {
    throw new Error('Need to have at least 2 leafs');
  }

  const deepestLeaf = findDeepestLeaf(root);
  const shallowestLeaf = findShallowestLeaf(root);
  console.log('Deepest: ', deepestLeaf);
  console.log('Shallowest: ', shallowestLeaf);
  return deepestLeaf - shallowestLeaf <= 1;

};

function findDeepestLeaf(root, depth = 0) {
  // base case: at leaf
  if (!root.right && !root.left) {
    return depth;
  }

  if (root.left && root.right) {
    return Math.max(findDeepestLeaf(root.left, depth + 1), findDeepestLeaf(root.right, depth + 1));
  } else if (root.left) {
    return findDeepestLeaf(root.left, depth + 1);
  } else if (root.right) {
    return findDeepestLeaf(root.right, depth + 1);
  }
}

function findShallowestLeaf(root, depth = 0) {
  // base case: at leaf
  if (!root.right && !root.left) {
    return depth;
  }

  if (root.left && root.right) {
    return Math.min(findShallowestLeaf(root.left, depth + 1), findShallowestLeaf(root.right, depth + 1));
  } else if (root.left) {
    return findShallowestLeaf(root.left, depth + 1);
  } else if (root.right) {
    return findShallowestLeaf(root.right, depth + 1);
  }
}

const tree = new BinaryTreeNode(1);
// console.log(isSuperbalanced(tree)); // error
tree.insertLeft(2);
tree.insertRight(3);
tree.left.insertLeft(4);
tree.left.insertRight(5);
tree.left.left.insertLeft(8);
tree.left.right.insertLeft(9);
tree.left.right.insertRight(10);
tree.left.right.right.insertLeft(11);
tree.right.insertLeft(6);
tree.right.insertRight(7);

console.log(isSuperbalanced(tree)); // false;
tree.right.left.insertRight(12);
tree.right.right.insertRight(13);
console.log(isSuperbalanced(tree)); // true;

