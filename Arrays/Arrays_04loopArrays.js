const numbersArr = [5, 8, 1, 80, 55, 45, 10, 7, 30];
let result = '';

// Retorna um novo array com valores modificados
// arr.map() return a new array with modified values
result = numbersArr.map((value, index, array) => {
    return value * 2;
})
// Ps: We can hide non-used params
console.log(result, 'arr.map result (Doubled values)');

// arr.filter() return only the values that match a condition
result = numbersArr.filter((value, index, array) => {
    return value % 2 == 0;
})
console.log(result, 'arr.filter result (even numbers)');

// arr.reduce() return a stacked value
result = numbersArr.reduce((stack, value, index, array) => {
    stack += value
    return stack
}, 0)// Initial value [optional]
// Ps: Be careful, because the initial value is set as the first value of stack.
console.log(result, 'arr.reduce result (sum of numbers)');


const peoples = [
    { name: 'Leonardo', age: 25},
    { name: 'Rita', age: 18},
    { name: 'Xico', age: 45},
    { name: 'Ana Claudia', age: 33},
    { name: 'Robson', age: 60},
    { name: 'Mariana', age: 13},
];

let older = '';

// Example of how to search the oldest person
older = peoples.reduce((stack, value) => {
    if(stack.age > value.age)
        return stack;
    return value;
});
console.log(older);