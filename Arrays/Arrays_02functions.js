let arr = ['Pedro', 'Marcio', 'Elizangela', 'Jubileu', 'Ana', 'Camila', 'Adolfo'];

// Verifies if it is an Array (typeof(arr) will return 'object')
// console.log(typeof(arr));
console.log(
    Array.isArray(arr)
)

// Functions bellow, DIRECTLY modify an Array

// Inserting records in the end of the array
arr.push('Moacir');

// Inserting records in the beginning of the array
arr.unshift('Zulu')

// Deleting the last record of the array
arr.pop()

// Deleting the first record of the array
arr.shift()

// Reversing the array order
arr.reverse();

// Sorting the array alphabetically
arr.sort();



// Functions Bellow, DON'T modify an array

// Returning an array as a string separated by ','
console.log(
    arr.toString()
);

// Returning an array as string, optionally accepting a parameter as separator (',', if hidden)
console.log(
    arr.join(' / ')
);

// Returning an array, concatenating others elements, WITHOUT MODIFY the values of the array
console.log(
    arr.concat('Juracy')
    // Also works
    // arr.concat(['Juracy', 'Mauricio'])
    // arr.concat(['Juracy', ['Miranda', 'Francisco']])
);

// Returning an array, with a range, with 2 params (starting at 'INDEX (>=)', until 'INDEX (<)/[optional]')
// PS: In case of Negative values, it'll bring in the reverse order
console.log(
    arr.slice(3, 5)
);

    // The splice() modifies main array in 2 different ways
// REMOVING ELEMENTS
// Params: (Start index (==), how many elements will be removed (n))
arr.splice(3, 2);
console.log(arr)

// INSERTING ELEMENTS
//  Params: (Start index that will add elements (==), n° of elements to be removed (n), elements to be added (values))
arr.splice(2, 1, 'Breno', 'Josismar');
console.log(arr)

    // (ECMAScript 2016)
// Check if an array has an specific value, and returns true/false
arr.includes('Pedro');

