class MaxHeap {
  constructor(arr=[]) {
    this.heap =arr
    this.buildHeap()
  }
  getParent(i) {
    return Math.floor((i - 1) / 2) ;
  }
  getLeftChild(i) {
    return i * 2 + 1;
  }
  getRightChild(i){
    return i * 2 +2
  }
  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parent = this.getParent(index);

      if (this.heap[parent] < this.heap[index]) {
        [this.heap[parent], this.heap[index]] = [
          this.heap[index],
          this.heap[parent],
        ];
        index =parent
      } else {
        break;
      }
    }
  }

  heapifyDown(i=0,n=this.heap.length ) {
    let index = i

    while(this.getLeftChild(index) < n){
      let largest = this.getLeftChild(index)
      let right = this.getRightChild(index)

      if(right < n && this.heap[largest] < this.heap[right]){
         largest = right
      }

      if(this.heap[index] < this.heap[largest]){
        [this.heap[index],this.heap[largest]]=[this.heap[largest],this.heap[index]]
        index = largest
      }else{
        break
      }

    }
  }

  buildHeap(){
    let start = Math.floor(this.heap.length/2) -1

    for(let i = start ; i >=0 ; i--){
        this.heapifyDown(i)
    }
  }

  heapSort(){
    let temp = [...this.heap]
    let length = this.heap.length -1

    for(let i = length ; i >0 ; i-- ){
        [this.heap[0],this.heap[i]] = [this.heap[i],this.heap[0]]
        this.heapifyDown(0,i)
    }

    [temp,this.heap] = [this.heap,temp]
    return temp
  }

  insert(value){
    this.heap.push(value)
    this.heapifyUp()
  }
  remove(){
    let pop = this.heap[0]
    this.heap[0]= this.heap[this.heap.length-1]
    this.heap.pop()
    this.heapifyDown()
    return pop
  }
  peak(){
    return this.heap[0]
  }
}

const maxHeap = new MaxHeap()
maxHeap.insert(2)
maxHeap.insert(10)
maxHeap.insert(9)
maxHeap.insert(7)
maxHeap.insert(200)
maxHeap.insert(4)
maxHeap.insert(100)
maxHeap.remove()
console.log(maxHeap.peak())
console.log(maxHeap.heapSort())