class CircularQueue {
  constructor(size) {
    this.q = new Array(size);
    this.size = size;
    this.front = -1;
    this.rear = -1;
  }

  equeue(value) {
    if (this.isFull()) {
      console.log("queue is full");
      return;
    }

    if (this.isEmpty()) {
      this.front = 0;
    }

    this.rear = (this.rear + 1) % this.size;
    this.q[this.rear] = value;
  }
  dequeue() {
    if (this.isEmpty()) return console.log("Queue is Empty");

    let removed = this.q[this.front];
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }

    return removed;
  }

  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }

  isEmpty() {
    return this.front === -1;
  }

  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }

    let res = "";
    let i = this.front;

    while (true) {
      res += `${this.q[i]} -> `;
      if (i === this.rear) break;
      i = (i + 1) % this.size;
    }

    console.log(res);
    
  }
}

const cqueue = new CircularQueue(5);
cqueue.equeue(1);
cqueue.equeue(2);
cqueue.equeue(3);
cqueue.equeue(4);
cqueue.equeue(5);
cqueue.dequeue();
cqueue.equeue(6);
cqueue.display();
