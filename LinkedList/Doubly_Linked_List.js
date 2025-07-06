class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      return;
    }
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = this.tail.next;
  }

  display() {
    let cur = this.head;
    let str = "";
    while (cur) {
      str += ` ${cur.data} ->`;
      cur = cur.next;
    }
    console.log(str ? str : "Empty");
  }
  reverse() {
    let cur = this.head;
    let parent = null;

    while (cur) {
      let temp = cur.next;
      cur.next = parent;
      cur.prev = temp;
      parent = cur;
      cur = temp;
    }

    this.tail = this.head;
    this.head = parent;
  }

  pop() {
    if (!this.head) return;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return
    }

    let prev = this.tail.prev;
    prev.next = null
    this.tail = prev;
  }

  remove(index) {
    if (!this.head) return -1;

    let count = 0;
    let cur = this.head;

    while (cur && count < index) {
      cur = cur.next;
      count++;
    }

    if (!cur) return -1; 

    if (cur === this.head && cur === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }

    if (cur === this.head) {
      this.head = cur.next;
      this.head.prev = null;
      return;
    }

    if (cur === this.tail) {
      this.tail = cur.prev;
      this.tail.next = null;
      return;
    }

    cur.prev.next = cur.next;
    cur.next.prev = cur.prev;
  }
}

const dblnkdlst = new DoublyLinkedList();
dblnkdlst.push(1);
dblnkdlst.push(2);
dblnkdlst.push(3);
dblnkdlst.push(4);
dblnkdlst.push(5);
// dblnkdlst.pop()
dblnkdlst.reverse();
dblnkdlst.display();
