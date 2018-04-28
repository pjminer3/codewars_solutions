/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, min = -Infinity, max = Infinity) {
  if (!root) return true;

  const currentValue = currentValue;

  if (currentValue < max &&
    currentValue > min &&
    isValidBST(root.left, min, currentValue) &&
    isValidBST(root.right, currentValue, max)) {
    return true
  } else {
    return false;
  }
};