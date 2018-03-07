function LinkedList(value) {
  this.value = value;
  this.next = null;
}


// Do in O(n) time and O(1) space
const hasCycle = (firstNode) => {
  // Input: first node of a linked list
  // Output: a boolean indicating if the linked list contains a cycle
  // edge cases: there is no input, node points to itself
  // constraints: ???

  if (!firstNode || !firstNode.next) throw new Error('Must have a LinkedList');
  if (firstNode.next === firstNode) throw new Error('Cannot point to itself');

  let fastRunner = firstNode.next.next;
  let slowRunner = firstNode.next;

  while (fastRunner) {
    if (fastRunner.next === null || fastRunner.next.next === null) {
      return false;
    } else if (fastRunner === slowRunner) {
      return true;
    }

    fastRunner = fastRunner.next.next;
    slowRunner = slowRunner.next;
  }

}

const a = new LinkedList('a');
const b = new LinkedList('b');
const c = new LinkedList('c');
const d = new LinkedList('d');
const e = new LinkedList('e');

a.next = b;
b.next = c;
c.next = d;
d.next = c;
// e.next = ;

console.log(hasCycle(a));

// How would one detect the first node in the cycle?
const getFirstInCycle = (firstNode) => {
  // first determine if the LL has a cycle
  // let fast/slow runner = firstNode
  let fast = firstNode;
  let slow = firstNode;

  // while there's still a fast runner and fastrunner.next
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    // if fast/slow equal eachother
    if (fast === slow) {
      // slow runner equals firstNode
      slow = firstNode;
      // while slow runner
      while (slow && fast) {
        // if fast/slow equal eachother return fast
        if (fast === slow) return fast;

        slow = slow.next;
        fast = fast.next;
      }
    }
  }
  // throw new Error 'There needs to be a cycle in the LL'
  throw new Error("First node must be part of a linked List");
}

console.log(getFirstInCycle(a)); // c


// Would it always work if the fastrunner ran 3?

// 

