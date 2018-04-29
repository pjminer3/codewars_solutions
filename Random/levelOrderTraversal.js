const levelOrder = (root) => {
  let current = [];
  let next = [];
  const result = [];
  let chunk = [];

  current.push(root);

  while(thereAreNodesToTraverse(current)) {
    let node = current.shift();
    if (node.left) next.push(node.right);
    if (node.right) next.push(node.left);
    chunk.push(node.val);

    if (!thereAreNodesToTraverse(current)) {
      current = next;
      next = [];
      result.push(chunk);
      chunk = [];
    }
  }

  return result;
}

function thereAreNodesToTraverse(arr) {
  return arr.length > 0;
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.right = new Node(7);
root.right.left = new Node(15);

let result = levelOrder(root);

console.log(result[0]); // [3]
console.log(result[1]); // [9, 20]
console.log(result[2]); // [15, 7]

