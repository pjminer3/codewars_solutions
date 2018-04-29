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

// Iterative solution: O(n) time, O(n) space
function isSuperbalanced(root) {
  // edge case: root is a leaf (and is therefore balanced)
  if (!root.left && !root.right) {
    return true;
  }

  // create an array to store leaf depths (should never have length > 2)
  const depths = [];

  // create a stack for [node, depth] touples
  const nodeStack = [];
  nodeStack.push([root, 0]);

  while (nodeStack.length) {
    // grab last node and depth
    const [node, depth] = nodeStack.pop();

    // if the node is a leaf add depth to array and check to see if it breaks it
    if (!node.left && !node.right) {
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);
      }

      if (depths.length > 2 || Math.abs(depths[0] - depths[1]) > 1) {
        return false;
      }
    } else {
      // if the node has left/right children add them to the stack
      if (node.left) {
        nodeStack.push([node.left, depth + 1]);
      }

      if (node.right) {
        nodeStack.push([node.right, depth + 1]);
      }
    }
  }

  return true;
}


// UGLY RECURSIVE SOLUTION THAT COULD CAUSE A CALLSTACK ERROR
// function isSuperbalanced(root) {
//   // input: binary tree
//   // output; boolean
//   // edge cases: root is null, tree has < two leafs
//   // constraints: none
  
//   // edge cases
//   if (!root || !root.left && !root.right) {
//     throw new Error('Need to have at least 2 leafs');
//   }

//   const deepestLeaf = findDeepestLeaf(root);
//   const shallowestLeaf = findShallowestLeaf(root);
//   console.log('Deepest: ', deepestLeaf);
//   console.log('Shallowest: ', shallowestLeaf);
//   return deepestLeaf - shallowestLeaf <= 1;

// };

// function findDeepestLeaf(root, depth = 0) {
//   // base case: at leaf
//   if (!root.right && !root.left) {
//     return depth;
//   }

//   if (root.left && root.right) {
//     return Math.max(findDeepestLeaf(root.left, depth + 1), findDeepestLeaf(root.right, depth + 1));
//   } else if (root.left) {
//     return findDeepestLeaf(root.left, depth + 1);
//   } else if (root.right) {
//     return findDeepestLeaf(root.right, depth + 1);
//   }
// }

// function findShallowestLeaf(root, depth = 0) {
//   // base case: at leaf
//   if (!root.right && !root.left) {
//     return depth;
//   }

//   if (root.left && root.right) {
//     return Math.min(findShallowestLeaf(root.left, depth + 1), findShallowestLeaf(root.right, depth + 1));
//   } else if (root.left) {
//     return findShallowestLeaf(root.left, depth + 1);
//   } else if (root.right) {
//     return findShallowestLeaf(root.right, depth + 1);
//   }
// }

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

