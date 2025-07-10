

class Graph {
    constructor(){
        this.graph = new Map()
    }

    createVertex(value){
        if(this.graph.has(value))return 

        this.graph.set(value, [])
    }

    addEdge(v1,v2,ud = false){
        this.createVertex(v1)
        this.createVertex(v2)

        this.graph.get(v1).push(v2)
        if(ud){
            this.graph.get(v2).push(v1)
        }
    }

    remove(value){
        if(!this.graph.has(value))return -1 
        this.graph.delete(value)
        this.graph.forEach((v,k)=>{
          let newVal = v.filter((data)=>data !== value)
          this.graph.set(k,newVal)
        })
    }

    degreeOfVertex(v){
        if(!this.graph.has(v))return -1
        
        return this.graph.get(v).length
    }

    dfs(){
        let visited = new Set()
        const dfsHelper = (node)=>{
            if(visited.has(node))return 
            visited.add(node)
            console.log(node)
            for(let neighbour of this.graph.get(node)){
                if(!visited.has(neighbour)){
                    dfsHelper(neighbour)
                }
            }
          
            
        }
        this.graph.forEach((val, key)=>{
            if(!visited.has(key)){
                dfsHelper(key)
            }
        })
    }

    bfs(key){
     let queue = [key]
     let visited = new Set()
     
     while(queue.length){
        let node = queue.shift()
        if(visited.has(node))continue
        console.log(node)
        visited.add(node)
       
        for(let neighbour of this.graph.get(node)){
            if(!visited.has(neighbour)){
                queue.push(neighbour)
            }
        }
     }
    }
    
}

const graph = new Graph()
graph.addEdge(1, 2,true)
graph.addEdge(1, 3,true)
graph.addEdge(3, 4)
graph.addEdge(2, 3)
graph.remove(1)
console.log(graph.degreeOfVertex(2))
graph.dfs()
console.log("bsf")
graph.bfs(2)
