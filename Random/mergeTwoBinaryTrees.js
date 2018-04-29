/* Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:
Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
Note: The merging process must start from the root nodes of both trees
*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const a1 = new TreeNode(1);
const b1 = new TreeNode(3);
const b2 = new TreeNode(2);
const c1 = new TreeNode(5)

a1.left = b1;
b1.left = c1;
a1.right = b2;

const A1 = new TreeNode(2);
const B1 = new TreeNode(1);
const B2 = new TreeNode(3);
const C1 = new TreeNode(4);
const C2 = new TreeNode(7);

A1.left = B1;
A1.right = B2;
B1.right = C1;
B2.right = C2;

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

const mergeTrees = function(t1, t2) {
  if (t1 === null) {
    return t2;
  } 
  if (t2 === null) {
    return t1;
  }

  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);

  return t1;
}

// var mergeTrees = function(t1, t2) {
//     // create a new node with val = t1.val + t2.val;
//     let result;

//     if (t1 && t2) {
//       result = new TreeNode(t1.val + t2.val);
//     } else if (t1) {
//       t2 = { left: null, right: null };
//       result = new TreeNode(t1.val);
//     } else if (t2) {
//       t1 = {left: null, right: null };
//       result = new TreeNode(t2.val);
//     } else {
//       return null;
//     }
    
    
//     // if there is a left on either t1/t2, make result.left equal TraverseTree(t1.left, t2.left);
//     if (t1.left || t2.left) {
//       result.left = mergeTrees(t1.left, t2.left);
//     }

//     // if there is a right on either t1/t2, make result.right equal TraverseTree(t1.right, t2.right);
//     if (t1.right || t2.right) {
//       result.right = mergeTrees(t1.right, t2.right);
//     }
    
//     return result;
// };

console.log(mergeTrees(a1, A1).val); // 3
console.log(mergeTrees(a1, A1).left.val); // 4
console.log(mergeTrees(a1, A1).right.val); // 5
console.log(mergeTrees(a1, A1).left.left.val); // 5
console.log(mergeTrees(a1, A1).left.right.val); // 4
console.log(mergeTrees(a1, A1).right.right.val); // 7

