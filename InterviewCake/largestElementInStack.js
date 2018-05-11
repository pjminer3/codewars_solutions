function Stack() {
  // initialize an empty array for items
  this.items = [];
  this.maxItems = [];
}

// push a new item to the last index
Stack.prototype.push = function(item) {
  this.items.push(item);

  if (this.maxItems.length === 0 || item >= this.getMax()) {
    this.maxItems.push(item);
  }
};

// remove the last item
Stack.prototype.pop = function() {

  // if the stack is empty, return null
  // (it would also be reasonable to throw an exception)
  if (!this.items.length) {
      return null;
  }

  const poppedItem = this.items.pop();

  if (poppedItem === this.getMax()) {
    this.maxItems.pop();
  }
  return poppedItem;
};

// see what the last item is
Stack.prototype.peek = function() {
  if (!this.items.length) {
      return null;
  }
  return this.items[this.items.length -1];
};

Stack.prototype.getMax = function() {
  if (!this.maxItems.length) return null;

  return this.maxItems[this.maxItems.length - 1];
};

const myStack = new Stack();

myStack.push(2);
console.log(myStack.getMax()); // 2
myStack.push(4);
console.log(myStack.getMax()); // 4
myStack.push(1);
console.log(myStack.getMax()); // 4
myStack.push(5);
console.log(myStack.getMax()); // 5
myStack.pop();
console.log(myStack.getMax()); // 4
myStack.pop();
myStack.pop();
console.log(myStack.getMax()); // 2
myStack.pop();
console.log(myStack.getMax()); // null


