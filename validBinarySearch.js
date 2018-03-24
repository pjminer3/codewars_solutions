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

function validBinarySearchTree(root) {
  // input: tree
  // output: boolean
  // edgecases: tree.left and/or tree.right is null, two nodes have the same value, if a nodes right/left are good compared to its value, but not compared to the values of nodes closer to the root
  const nodes = [[-Infinity, root, Infinity]];

  while(nodes.length) {
    // check first node
    let [currentMin, currentNode, currentMax] = nodes.pop();

    if (!checkNode(currentMin, currentNode, currentMax)) {
      return false;
    }

    if (currentNode.right) {
      // reset min
      nodes.push([currentNode.value, currentNode.right, currentMax]);
    }
    if (currentNode.left) {
      // reset max
      nodes.push([currentMin, currentNode.left, currentNode.value]);
    }
  }

  return true;
};

function checkNode(min, node, max) {
  // checks to make sure that if there are a left and a right, they're both greater than their mins and less than their maxs
  return (!node.left || (node.left.value > min && node.left.value < max)) && (!node.right || (node.right.value < max && node.right.value > min));
}


const tree = new BinaryTreeNode(5);
tree.insertLeft(3);
tree.insertRight(6);
tree.left.insertLeft(1);
tree.left.left.insertRight(2);
tree.left.insertRight(4);
tree.right.insertRight(8);
// console.log(validBinarySearchTree(tree)); // true;

tree.right.right.insertRight(7);
// console.log(validBinarySearchTree(tree)); // false

tree.right.right.right.value = 10;
// console.log(validBinarySearchTree(tree)); // true;

tree.left.right.insertRight(1000); 
console.log(validBinarySearchTree(tree)); // false;
