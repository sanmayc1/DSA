
class Node {
    constructor(value){
        this.data = value;
        this.children = []
    }
}


const root= new Node(10)
const c1 = new Node(2)
const c2 = new Node(4)
const c3 = new Node(80)
const c5 = new Node(20)

root.children.push(c1)
root.children.push(c2)
root.children.push(c3)
c3.children.push(c5)

const dfs = (root)=>{
    if(!root)return
    
    for(let node of root.children){
        dfs(node)
    }
    console.log(root.data)
}

dfs(root)

