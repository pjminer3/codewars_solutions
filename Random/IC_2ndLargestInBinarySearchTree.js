function BinaryTreeNode(value){
  this.value = value;
  this.left  = null;
  this.right = null;
};
BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};
BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};
BinaryTreeNode.prototype.insert = function(value) {
  
  if (value > this.value) {
    if (this.right === null) {
      this.insertRight(value)
    } else {
      this.right.insert(value);
    }
  } else {
    if (this.left === null) {
      this.insertLeft(value);
    } else {
      this.left.insert(value);
    }
  }
}

const tree = new BinaryTreeNode(5);
tree.insert(3);
tree.insert(8);
tree.insert(0);
tree.insert(4);
tree.insert(7);
tree.insert(10);
tree.insert(9);

const tree2 = new BinaryTreeNode(5);
tree2.insert(5);
tree2.insert(3);
tree2.insert(8);
tree2.insert(1);
tree2.insert(4);
tree2.insert(7);
tree2.insert(12);
tree2.insert(10);
tree2.insert(9);
tree2.insert(11); 

console.log(tree.left.value); // 3
console.log(tree.right.value); // 8
console.log(tree.left.left.value); // 0
console.log(tree.left.right.value); // 4
console.log(tree.right.left.value); // 7
console.log(tree.right.right.value); // 10
console.log(tree.right.right.left.value); // 9

// // question is how to find the 2ndLargest value
// function findLargest(tree) {
//   if (!tree) {
//     throw new Error('Tree must have at least one node');
//   }

//   if (tree.right) {
//     return findLargest(tree.right);
//   }

//   return tree.value;
// }


// function find2ndLargest(tree) {
//   if (!tree || (!tree.right & !tree.left)) {
//     throw new Error('Tree must have at least 2 nodes')
//   }

//   // if are at the parent of the largest node and the largest node has no left leg
//   if (tree.right && (!tree.right.right && !tree.right.left)) {
//     return tree.value
//   }

//   // if the largest node does have a left leg and we traversed down to the largest node
//   if (!tree.right && tree.left) {
//     return findLargest(tree.left);
//   }

//   // otherwise take a step right
//   return find2ndLargest(tree.right);
// }

function findLargest(rootNode) {
  if (!rootNode) {
    throw new Error('Must have at least 1 node');
  }

  let current = rootNode;

  while (current.right) {
    current = current.right;
  }

  return current.value;
};

function find2ndLargest(rootNode) {
  // catch false entries
  if (!rootNode || (!rootNode.left && !rootNode.right)) {
    throw new Error('Must have at least 2 valid nodes');
  }

  let current = rootNode

  while (current) {
    // first case: at parent of rootNode and there is no left leg
    if (current.right && !current.right.right && !current.right.left) {
      return current.value;
    } 
    
    // second case: at largest node and there is a left
    if (!current.right && current.left) {
      return findLargest(current.left);
    }

    // 3rd case
    current = current.right;
  }
}

console.log('The correct answer should be 9');
console.log(find2ndLargest(tree));

console.log('The correct answer should be 11');
console.log(find2ndLargest(tree2));
