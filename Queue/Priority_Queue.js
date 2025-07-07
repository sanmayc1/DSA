class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  getLeftChild(i) {
    return i * 2 + 1;
  }
  getRightChild(i) {
    return i * 2 + 2;
  }
  getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  enqueue(value, priority) {
    this.queue.push({ value, priority });
    this.hepifyUp();
  }

  dequeue() {
    let pop = this.queue[0];
    this.queue[0] = this.queue[this.queue.length - 1];
    this.queue.pop();
    this.hepifyDown();
    return pop;
  }

  hepifyUp() {
    let index = this.queue.length - 1;

    while (index > 0) {
      let parent = this.getParent(index);
      if (this.queue[parent].priority > this.queue[index].priority) {
        [this.queue[parent], this.queue[index]] = [
          this.queue[index],
          this.queue[parent],
        ];

        index = parent;
      } else {
        break;
      }
    }
  }

  hepifyDown() {
    let index = 0;

    while (this.getLeftChild(index) < this.queue.length) {
      let smallest = this.getLeftChild(index);
      let right = this.getRightChild(index);

      if (
        right < this.queue.length && this.queue[smallest].priority > this.queue[right].priority 
       
      ) {
        smallest = right;
      }

      if (this.queue[index].priority > this.queue[smallest].priority) {
        [this.queue[smallest], this.queue[index]] = [
          this.queue[index],
          this.queue[smallest],
        ];
        index = smallest;
      } else {
        break;
      }
    }
  }

  display() {
    console.log(this.queue);
  }
}

const pq = new PriorityQueue();
pq.enqueue(10, 1);
pq.enqueue(20, 5);
pq.enqueue(30, 2);
pq.enqueue(60, 3);
pq.enqueue(80, 4); 
pq.display();


//  priority queue implement using heap
