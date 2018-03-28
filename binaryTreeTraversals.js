function BinaryTreeNode(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinaryTreeNode.prototype.insertLeft = (value) => {
  this.left = new BinaryTreeNode(value);
  return this.left;
}

BinaryTreeNode.prototype.insertRight = (value) => {
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

const inOrderTraversal = (node) => {

};

const postOrderTraversal = (node) => {

};

const preOrderTraversal = (node) => {

};