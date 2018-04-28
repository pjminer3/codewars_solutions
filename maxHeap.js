class MaxHeap {
  constructor() {
    this.heap = [11, 5, 8, 3, 1, 6, , , , ,];
    this.size = 6;
  }

  // 'get index' methods
  leftChildIdx(index) {
    return (index * 2) + 1;
  }

  rightChildIdx(index) {
    return (index * 2) + 2;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }


  // 'determine if node exists' methods
  hasLeftChild(index) {
    return !(this.heap[this.leftChildIdx(index)] === undefined);
  }

  hasRightChild(index) {
    return !(this.heap[this.rightChildIdx(index)] === undefined);
  }

  hasParent(index) {
    return !(this.heap[this.getParentIndex(index)] === undefined);
  }


  // 'get value' methods 
  leftChild(index) {
    return this.heap[this.leftChildIdx(index)];
  }

  rightChild(index) {
    return this.heap[this.rightChildIdx(index)];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  
  swap(idx1, idx2) {
    let memory = this.heap[idx1];
    this.heap[idx1] = this.heap[idx2];
    this.heap[idx2] = memory;
  }


  // view root node, return its value
  peek() {
    return this.heap[0];
  }

  // remove root node and return its value
  poll() {
    // saves value in external variable
    const value = this.heap[0];
    // resets root as the last value added
    this.heap[0] = this.heap[this.size - 1];
    // assign previous last heap index to undefined;
    this.heap[this.size - 1] = undefined;
    // reduce size by 1
    this.size--;
    // heapify down
    this.heapfiyDown();
    return value;
  }

  heapfiyDown(index = 0) {
    // grab the index of the larger of the two children
    let largerChildIdx;
    if (this.hasRightChild(index)) {
      largerChildIdx = this.leftChild(index) >= this.rightChild(index) ? this.leftChildIdx(0) : this.rightChildIdx(0);
    } else if (this.hasLeftChild(index)) {
      largerChildIdx = this.leftChildIdx(index);
    } else {
      // no children, no more heapifying to do
      return;
    }
    // compare larger child to root node
    if (this.heap[index] < this.heap[largerChildIdx]) {
      // check: child is larger than root,
        // true - swap child and root, call heapifyDown(largeChildIndex[which is now the root]);
        this.swap(index, largerChildIdx);
        this.heapfiyDown(largerChildIdx);   
    } else {
      return;
    }
  }

  

  heapifyUp(idx = this.size - 1) {
    while (this.heap[this.getParentIndex(idx)] < this.heap[idx]) {
      let parentIdx = this.getParentIndex(idx);
      this.swap(parentIdx, idx);
      idx = parentIdx;
    }
    return;
  }

  add(value) {
    this.heap[this.size] = value;
    this.size++;
    return this.heapifyUp();
  }
}

const myheap = new MaxHeap();

console.log(myheap.leftChildIdx(3) === 7);
console.log(myheap.rightChildIdx(1) === 4);
console.log(myheap.getParentIndex(2) === 0);

console.log(myheap.hasLeftChild(5) === false);
console.log(myheap.hasRightChild(0) === true);
console.log(myheap.hasParent(0) === false);

console.log(myheap.leftChild(0) === 5);
console.log(myheap.rightChild(2) === undefined);
console.log(myheap.parent(3) === 5); 

console.log(myheap.size === 6);
console.log(myheap.heap.length === 10);

myheap.swap(0, 1);
console.log(myheap.heap[0] === 5);
console.log(myheap.heap[1] === 11); 
myheap.swap(0, 1);

console.log(myheap.peek() === 11);

console.log(myheap.poll() === 11); 
console.log(myheap.size === 5);
console.log(myheap.peek() === 8);  
console.log(myheap.rightChild(0) === 6);
console.log('Heap should be [8, 5, 6, 3, 1] with a length of 10 and a size of 5: \n', myheap, '\n', myheap.heap);

myheap.add(7);
myheap.add(8);
myheap.add(9);
myheap.add(4);
myheap.add(1);
myheap.add(1);
console.log('Heap should be [9, 8, 8, 5, 1, 6, 7, 3, 4, 1, 1] with a length of 20 and size of 11: \n', myheap, 
'\n', myheap.heap);