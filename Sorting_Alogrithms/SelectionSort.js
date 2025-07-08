

const SelectionSort = (arr)=>{
 
    for(let i = 0 ; i < arr.length -1 ; i++){
      let smallest = i
      for(let j = i + 1 ; j < arr.length ; j++){
        if(arr[smallest] > arr[j]){
            smallest = j
        }
      }
      [arr[i],arr[smallest]]=[arr[smallest],arr[i]]
    }
   return arr
}

console.log(SelectionSort([5,3,2,6,7,9,1,4]))