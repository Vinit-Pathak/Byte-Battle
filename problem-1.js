/*Problem - 1
Delete middle element of a stack

Given a stack with push(), pop(), and empty() operations, The task is to delete the middle element of it without using any additional data structure.


Input  : Stack[] = [1, 2, 3, 4, 5]

Output : Stack[] = [1, 2, 4, 5]


Input  : Stack[] = [1, 2, 3, 4, 5, 6]

Output : Stack[] = [1, 2, 4, 5, 6]
*/


class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  deleteMiddle() {
    if (this.isEmpty()) {
      return;
    }

    const middleIndex = Math.floor(this.items.length / 2);
    this.items.splice(middleIndex, 1);
  }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log("Before deletion:", stack.items); // [1, 2, 3, 4, 5]
stack.deleteMiddle();
console.log("After deletion:", stack.items); // [1, 2, 4, 5]
