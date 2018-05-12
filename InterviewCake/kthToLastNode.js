const kthToLastNode = (k, head) => {
  let node = head;
  let end = head;
  
  for (let i = 1; i <= k; i++) {
    end = end.next;
  }

  while (end) {
    end = end.next;
    node = node.next;
  }

  return node;
};

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a));