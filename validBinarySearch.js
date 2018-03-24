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

const tree = new BinaryTreeNode(5);
tree.insertLeft(3);
tree.insertRight(6);
tree.left.insertLeft(1);
tree.left.left.insertRight(2);
tree.left.insertRight(4);
tree.right.insertRight(8);
console.log(validBinarySearchTree(tree)); // true;

tree.right.right.insertRight(7);
console.log(validBinarySearchTree(tree)); // false

function validBinarySearchTree(root) {
  // input: tree
  // output: boolean
  // edgecases: tree.left and/or tree.right is null, two nodes have the same value
  const nodes = [root];

  while(nodes.length) {
    // check first node
    let current = nodes.pop();
    if (!checkNode(current)) {
      return false;
    }

    if (current.right) {
      nodes.push(current.right);
    }
    if (current.left) {
      nodes.push(current.left);
    }
  }

  return true;
};

function checkNode(node) {
  return (!node.left || node.left.value < node.value) && (!node.right || node.right.value > node.value);
}

