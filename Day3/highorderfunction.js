//Return a sum of the array
const arrayReduce = (reducer, initialVal, arr) =>{
    //shared stuff
    let sum = initialVal;
    //1
    //3
    //6
    //10
    //15

 

    for(let i=0; i<arr.length; i++) {
        //unique stuff in reducer() call
              //acc is the starting index // arr[i] is the current index
        sum = reducer(sum, arr[i]);

 

        // more shared stuff
    }
    return sum;
}

 


let reducer = (currentSummedValue, currentIndex) => currentSummedValue + currentIndex;

 

console.log(arrayReduce(reducer, 0, [1,2,3,4,5]));
// Output : 15