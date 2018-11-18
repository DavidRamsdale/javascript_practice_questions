//Write a JavaScript function named objectMatches to compare two objects to determine if the first object contains equivalent property values to //the second one.

objectMatches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })
//true

// objectMatches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })
// //false

// objectMatches({ hair: 'long', beard: true }, {hair: 'short', beard: true })
//false

function objectMatches(object1, object2){
    array1 = [];
    array2 = [];
    key_value(object1, array1);
    key_value(object2, array2);
    console.log(intersect(array1, array2));

}

function key_value(x, array, callback){
    for (y in x){
        array.push(y);
    }
}

function intersect(array1, array2){
    if (array1.filter(value => -1 !== array2.indexOf(value)) ==  array2) {
        return array2;
    }

    return false
}