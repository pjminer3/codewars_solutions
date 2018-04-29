/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
  // both the first and second largest nodes will always be leafs
  // keep an array of leafs up
  let largestLeaf = -1;
  let secondLargestLeaf = -1;

  // keep an array of nodes to iterate through
  const nodes = [root];

  // create a while loop: while node length
  while (nodes.length) {
    // shift off the first node
    let node = nodes.shift();
    // if node has children add them both to nodes
    if (node.left) {
      nodes.push(node.left);
      nodes.push(node.right);
    }
    // if a node does not have children
    // check to see if it's val is larger than largest leaf
    if (node.val > largestLeaf) {
      // if so make 2nd largest leaf = largest leaf
      secondLargestLeaf = largestLeaf;
      // make node equal largest leaf
      largestLeaf = node.val;
      // else if check to see if its larger than 2nd largest leaf
    } else if (node.val > secondLargestLeaf && node.val !== largestLeaf) {
      // if so make 2nd largest leaf = node
      secondLargestLeaf = node.val;
    }
  }
  return secondLargestLeaf === largestLeaf ? -1 : secondLargestLeaf;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const tree = new TreeNode(2);
tree.left = new TreeNode(2);
tree.right = new TreeNode(5);
tree.right.left = new TreeNode(5);
tree.right.right = new TreeNode(7);

// console.log(findSecondMinimumValue(tree)); // 5

tree.left.left = new TreeNode(2);
tree.left.right = new TreeNode(100);

console.log(findSecondMinimumValue(tree)); // 7