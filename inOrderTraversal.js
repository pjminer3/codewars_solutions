const inOrderTraversal = (root) => {
  if (!root) return [];
  return [
    ...inOrderTraversal(root.left),
    root.val,
    ...inOrderTraversal(root.right),
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

console.log(inOrderTraversal(root)); // [5, 0, 6, 1, 3, 2, 9]