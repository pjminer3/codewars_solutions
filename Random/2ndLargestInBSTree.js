function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

// time complexity: O(n);
// space complexity: O(1);

function find2ndLargestElement(root) {
  // find the largest element while always keeping track of the element before it
  let secondLargest = null;
  let largestNode = root;

  while (largestNode.right) {
    secondLargest = largestNode;
    largestNode = largestNode.right;
  }

  // see if the largest element has a .left property
  if (!largestNode.left) {
    return secondLargest.value;
  }

  secondLargest = largestNode.left;

  // if so => find the largest
  while(secondLargest.right) {
    secondLargest = secondLargest.right;
  }
    return secondLargest.value;
};

const tree = new BinaryTreeNode(12);
tree.insertLeft(8);
tree.left.insertLeft(7);
tree.left.insertRight(10);
tree.left.right.insertLeft(9);
tree.left.right.insertRight(11);
tree.insertRight(16);
tree.right.insertLeft(13);
tree.right.insertRight(17);
tree.right.right.insertRight(20);
console.log(find2ndLargestElement(tree)); // 17

tree.right.right.right.insertLeft(19);
console.log(find2ndLargestElement(tree)); // 19
