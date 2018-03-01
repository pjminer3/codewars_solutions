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

// original solution with internal recursion (yuck): O(n) time and space (checks every single node)
// function checkTree(rootNode) {
//   let result = true;

//   function checkBST(rootNode, lowerBound = -Infinity, upperBound = Infinity) {
//     // check rootNode.left.value to make sure it's less than rootNode.value but more than min
//     if (!!rootNode.left) {
//       if (rootNode.left.value > rootNode.value || rootNode.left.value < lowerBound || rootNode.left.value > upperBound) {
//         // if failed change result to false
//         result = false;
//       }
//       // call checkBST on rootNode.left with a max of rootNode.value and min of min
//       checkBST(rootNode.left, lowerBound, rootNode.value);
//     }

//     // check rootNode.right to make sure it's more than rootNode but less than max
//     if (!!rootNode.right) {
//       if (rootNode.right.value < rootNode.value || rootNode.right.value > upperBound || rootNode.right.value < lowerBound) {
//         // if failed change result to false
//         result = false;
//       }
//       // call checkBST on rootNode.right with a min of rootNode.value and max of max
//       checkBST(rootNode.right, rootNode.value, upperBound);
//     }
//     return;
//   }

//   checkBST(rootNode);

//   return result;
// }



// // improved solution without recursion
// function checkTree(rootNode) {
//   // create a 'callstack' to put the nodes we need to check inside and add initial node
//   const callStack = [];
//   callStack.push({node: rootNode, lowerBound: -Infinity, upperBound: Infinity });

//   // loop through the call stack checking nodes to make sure they follow the rules and adding nodes to the callStack
//   while (callStack.length) {
//     const { node, lowerBound, upperBound } = callStack.pop();

//     // if node is invalid, return false
//     if (node.value > upperBound || node.value < lowerBound) {
//       return false;
//     }

//     // if there's a left/right node, add them to stack
//     if (node.left) {
//       callStack.push( {node: node.left, lowerBound, upperBound: node.value});
//     }
//     if (node.right)
//       callStack.push( {node: node.right, lowerBound: node.value, upperBound });
    
//   }

//   // if we checked all nodes and didn't fail, return true
//   return true;
// }


// improved solution with recursion
function checkTree(rootNode, lowerBound = -Infinity, upperBound = Infinity) {
  // return true if we're at the tree's leaf
  if (!rootNode) return true;

  // check to see if the rootNode's value falls outside parameters and return false
  if (rootNode.value > upperBound || rootNode.value < lowerBound) return false;

  // return the combination of both the lower branches so if any fail it will traverse all the way up to the top node
  return checkTree(rootNode.left, lowerBound, rootNode.value) && checkTree(rootNode.right, rootNode.value, upperBound);
}

const tree = new BinaryTreeNode(5);
tree.insert(3);
tree.insert(8);

console.log(checkTree(tree)); // true

tree.insert(2);
tree.insert(4); 
tree.insert(7);
tree.insert(9);

console.log(checkTree(tree)); // true

tree.left.right.value = 6;

console.log(checkTree(tree)); // false;

