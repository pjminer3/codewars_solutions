const postorderTraversal = (root) => {
  if (!root) return [];
  return [
    ...postorderTraversal(root.left),
    ...postorderTraversal(root.right),
    root.val
    ];
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(1);
root.left = new Node(0);
root.left.right = new Node(6)
root.right = new Node(2);
root.right.left = new Node(3);
root.left.left = new Node(5);
root.right.right = new Node(9);

console.log(postorderTraversal(root)); // [5, 6, 0, 3, 9, 2, 1]