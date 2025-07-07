class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }
  pop() {
    return this.stack.pop();
  }
  peak() {
    return this.stack[this.stack.length - 1];
  }
  size() {
    return this.stack.length;
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}

class MinStack {
  constructor() {
    this.stack = [];
    this.MinStack = [];
  }

  push(value) {
    this.stack.push(value);

    if (
      this.MinStack.length === 0 ||
      this.MinStack[this.MinStack.length - 1] >= value
    ) {
      this.MinStack.push(value);
    }
  }

  getMin() {
    return this.MinStack[this.MinStack.length - 1];
  }

  pop() {
    let pop = this.stack.pop();
    if (pop === this.MinStack[this.MinStack.length - 1]) {
      this.MinStack.pop();
    }
    return pop;
  }
}

const ms = new MinStack();

ms.push(20);
ms.push(6);
ms.push(90);

ms.push(10);
ms.push(1);
ms.push(30);
ms.pop();
ms.pop();
console.log(ms.getMin());
