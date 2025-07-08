

const QuickSort = (arr)=>{
    if(arr.length <= 1)return arr 

    let pivot = arr[arr.length-1]
    let left = []
    let right = []

    for(let i = 0 ; i < arr.length - 1 ; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else[
            right.push(arr[i])
        ]
    }

    return [...QuickSort(left),pivot,...QuickSort(right)]

}


console.log(QuickSort([6,5,7,4,8,3,2,9,1]))



