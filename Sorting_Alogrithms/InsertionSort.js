

const insertionSort = (arr)=>{

    for(let i = 1 ; i < arr.length ; i++){
        let j = i -1
        let key = arr[i]
        while( j >= 0 && key < arr[j]){
           arr[j+1] = arr[j]
           j--
        }

        arr[j+1] = key
    }
    return arr
}


console.log(insertionSort([6,4,3,2,1,7,9,54]))