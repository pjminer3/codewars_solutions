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
var isValidBST = function(r, mn = -Infinity, mx = Infinity) {
  if (!r) return true;
  if (r.val < mx &&
    r.val > mn &&
    isValidBST(r.left, mn, r.val) &&
    isValidBST(r.right, r.val, mx)) {
      return true
  } else {
      return false;
  }
};