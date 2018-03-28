function BinaryTreeNode(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
}

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
}

const tree = new BinaryTreeNode(4);
tree.insertLeft(2);
tree.left.insertLeft(1);
tree.left.insertRight(3);
tree.insertRight(6);
tree.right.insertLeft(5);
tree.right.insertRight(7);

// Called in order because the root is acted on 'in between' it's two children
const inOrderTraversal = (node) => {
  if (!node) return;

  inOrderTraversal(node.left);
  console.log('In-Order Traversal: ', node.value);
  inOrderTraversal(node.right);
};

// Callsed 'post' traversal because the root is acted on after (post) its two children
const postOrderTraversal = (node) => {
  if (!node) return;

  postOrderTraversal(node.left);
  postOrderTraversal(node.right);
  console.log('Post-Order Traversal: ', node.value);
};

// called 'pre order' because the node is acted on before (pre) its two children
const preOrderTraversal = (node) => {
  if (!node) return;
  
  console.log('Pre-Order Traversal: ', node.value);
  preOrderTraversal(node.left);
  preOrderTraversal(node.right);
};

inOrderTraversal(tree);
postOrderTraversal(tree);
preOrderTraversal(tree);