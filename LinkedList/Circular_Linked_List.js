class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.tail.next = this.head;
      return;
    }

    this.tail.next = newNode;
    this.tail = this.tail.next;
    this.tail.next = this.head;
  }
  display() {
    let cur = this.head;
    let result = "";
    do {
      result += ` ${cur.data} -> `;
      cur = cur.next;
    } while (cur && cur !== this.head);

    console.log(result);
  }

  remove(value) {
    if (!this.head) return;

    if (this.head.data === value && this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }

    let cur = this.head;
    let parent = null;

    do {
      if (cur.data === value) break;
      parent = cur;
      cur = cur.next;
    } while (cur !== this.head);

    if (cur.data !== value) return -1;

    if (cur === this.head) {
      this.head = this.head.next;
      this.tail.next = this.head;
      return;
    }

    parent.next = cur.next;
    if (cur === this.tail) {
      this.tail = parent;
    }
  }
}

const clnkdlst = new CircularLinkedList();

clnkdlst.insert(1);
clnkdlst.insert(2);
clnkdlst.insert(3);
clnkdlst.insert(4);
clnkdlst.insert(5);
clnkdlst.remove(4);
clnkdlst.display();