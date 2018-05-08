/**
 
Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7

 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder, treeValues) {
  // get rootValue by searching furthest to right in postOrder
  const rootValue = !treeValues ? postorder[postorder.length - 1] : returnLastInArr(treeValues, postorder);
  const rootNode = new 
  //
};

function returnLastInArr (searchValues, arr) {
  let maxIdx = -1;
  let returnValue;

  searchValues.forEach((value) => {
    for (let i = 0; i < arr.length; i++) {
      if (value === arr[i] && i > maxIdx) {
        maxIdx = i;
        returnValue = arr[i];
      } 
    }
  });

  return returnValue;
}

 const inorder = [9, 3, 15, 20, 7];
 const postorder = [9, 15, 7, 20, 3];

 console.log(returnLastInArr([15, 3, 7, 20], inorder)); // 7

//  console.log(buildTree(inorder, postorder));

 