function minMax (array) {

    array = array.filter(e => e !== NaN)

    let min = array[0];
    let max = array[0];

    for (x of array){
        if(typeof x === 'number'){
            if (x <= min){
                min = x;
            }
            if (x >= max){
                max = x;
            }
        }

    }
    return[min, max];
}

console.log(minMax([1,2,3,4,5]))
console.log(minMax([100,-3,-1000]))
console.log(minMax(["33",5,1]))