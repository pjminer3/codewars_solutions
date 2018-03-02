/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3

   SOLVE BOTH ITERATIVELY AND RECURSIVELY
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) {
    return [];
  }

  let nodeList = [root];

  while (nodeList.length) {
    if (checkIfSymmetric(nodeList)) {
      let newList = nodeList.reduce((list, node) => {
        let rightNode = node.right ? node.right : null;
        let leftNode = node.left ? node.left : null;
        list = [...list, leftNode, rightNode];
        let newNewList = [];

        for (let i = 0; i < list.length; i++) {
          if (list[i]) {
            newNewList.push(list[i]);
          }
        }

        return newNewList;
      }, []);
      nodeList = newList;
    } else {
      return false;
    }
  }

  return true;
};

function checkIfSymmetric(nodeList) {
  // basecase 
  if (nodeList.length === 1 || nodeList.length === 0) {
    return true;
  }

  if (nodeList[0].val === nodeList[nodeList.length - 1].val) {
    return checkIfSymmetric(nodeList.slice(1, -1));
  } else {
    return false;
  }
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const tree1 = new TreeNode(1)
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(2);
tree1.left.left = new TreeNode(3);
tree1.left.right = new TreeNode(4);
tree1.right.left = new TreeNode(4);
tree1.right.right = new TreeNode(3);

const tree2 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(2);
tree1.left.left = new TreeNode(3);
tree1.left.right = new TreeNode(4);
tree1.right.left = new TreeNode(3);
tree1.right.right = new TreeNode(4);

console.log('tree1: ', isSymmetric(tree1)); // true
console.log('tree2: ', isSymmetric(tree2)); // false
console.log(checkIfSymmetric([tree1])); // true
console.log(checkIfSymmetric([tree1.left, tree1.right])); // true