

class Node {
    constructor(value){
        this.data = value
        this.next = null
    }
}


class Stack {
    constructor(){
        this.head = null
    }

    push(value){
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }

    pop(){
      if(!this.head)return -1
      let pop = this.head.data
      this.head = this.head.next
      return pop
    }

    display(){
        let cur = this.head
        let result = ''

        while(cur){
            result += ` ${cur.data} ${cur.next ? '->' :""} `
            cur  = cur.next
        }
        console.log(result)
    }
}


const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.pop()
stack.display()
