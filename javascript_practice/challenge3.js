//Get every nth element in an given array

function nthElement(array, number){
    let newArray = [];

    if(number > 0){
        for(i=number; i <= array.length; i += number){
            newArray.push(array[i-1]);
        }
    }

    if(number < 0 ){
        const index = number;
        let Newnumber = array.length + index;
        for(i = Newnumber; i >= 0; i += index){
            newArray.push(array[i]);
        }
    }

    if(number === 0){
        return "invalid selection";
    }

    return newArray;
}

console.log(nthElement([1,2,3,4,5,6,8], -3));
