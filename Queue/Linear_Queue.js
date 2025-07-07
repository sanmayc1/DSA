
class Node {
    constructor(value){
        this.data = value
        this.next = null
    }
}

class LinearQueue{

    constructor(){
        this.front = null
        this.rear = null
    }

    enqueue(value){
        const newNode = new Node(value)
        if(!this.front){
            this.front = newNode
            this.rear = newNode
            return

        }

        this.rear.next = newNode
        this.rear = newNode
    }

    dequeue(){
        if(!this.front)return
        if(this.front ===  this.rear){
            this.front = null
            this.rear  = null
            return
        }

        this.front = this.front.next
    }

    display(){
        let cur = this.front
        let res = ''

        while(cur){
            res += `${cur.data} -> `
            cur= cur.next
        }
        console.log(res)
    }
}

const queue = new LinearQueue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.dequeue()
queue.display()