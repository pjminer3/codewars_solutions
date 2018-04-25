const preOrderTraversal = (root) => {
  if (!root) return [];
  return [
    root.value,
    ...preOrderTraversal(root.left),
    ...preOrderTraversal(root.right),
  ];
};

class Node {
  constructor(val) {
    this.value = val;
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

console.log(preOrderTraversal(root)); // [1, 0, 5, 6, 2, 3, 9]