const person = [
    { name: 'Leonardo', age: 25},
    { name: 'Rita', age: 18},
    { name: 'Xico', age: 45},
    { name: 'Ana Claudia', age: 33},
    { name: 'Robson', age: 60},
    { name: 'Mariana', age: 13},
];
// WHILE a condition return TRUE, do something
while(1 == 1){
    console.log('I ended the loop with break, otherwise will loop forever');
    break;
}

// UNTIL the INDEX ( i ) MATCHES the operador, do something
for(i = 0; i < person.length; i++){
    console.log(person[i])
};

// FOR IN
// Runs through each element of an array, but returning the index instead of values
for (const index in person) {
    console.log('The index is: ', index);
    // console.log(person[index]); Checking the values
}

// FOR OF
// Runs through each element of an array, but returning only the values
for (const value of person) {
    console.log(value);
}

// FOR EACH
// Runs through each element of an array, being able to access the value, index or the entire array in every run
person.forEach( (value, index, array) => {
    console.log(value, index);
});

// Runs through each element of an object array, and returns ONLY THE FIRST ONE object that matches the condition
console.log(person.find( person => {
    // return person.name === 'Mariana'
    return person.age === 60
}));