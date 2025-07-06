class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null; // optional it helps insertion at end in O(1) time complexity
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  display() {
    let cur = this.head;
    let result = "";
    while (cur) {
      result += ` ${cur.data} ->`;
      cur = cur.next;
    }
    console.log(result);
  }

  pop() {
    if (!this.head) return;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }

    let cur = this.head;
    let parent = null;

    while (cur.next) {
      parent = cur;
      cur = cur.next;
    }
    parent.next = null;
    this.tail = parent;
  }

  shift() {
    if (!this.head) return;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }

    this.head = this.head.next;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }
  getValue(index){
    if(!this.head)return -1
    let count = 0
    let cur = this.head

    while(cur && count < index){
       cur = cur.next
       count++
    }

    if(index === count)return cur.data
    return -1
  }

  reverse(){
    let cur = this.head
    let parent = null

    while(cur){
      let temp = cur.next 
      cur.next = parent
      parent = cur
      cur = temp
    }
    this.tail = this.head
    this.head = parent
  }

  remove(index){
    let count = 0
    let cur = this.head
    let parent = null

    while(cur && count < index){
        parent = cur
        cur = cur.next
        count++
    }

    if(cur||count !== index)return -1

    if(!parent ){
      this.head = cur.next
      if(cur=== this.tail) this.tail = this.head
      return
    }

    parent.next = cur.next
    if(!cur=== this.tail) this.tail = parent
    
  }
}

const lnkdlst = new SinglyLinkedList();
lnkdlst.push(1);
lnkdlst.push(2);
lnkdlst.push(3);
lnkdlst.push(4);
lnkdlst.push(5);
lnkdlst.pop();
lnkdlst.shift();
lnkdlst.unshift(1);
lnkdlst.unshift(0)
console.log(lnkdlst.getValue(3))
lnkdlst.reverse()
lnkdlst.remove(2)
lnkdlst.display();
