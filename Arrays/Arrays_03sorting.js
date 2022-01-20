// Important: sorting array is always based on their values
var etec = Array()
etec[0] = 'Jaragua'
etec[1] = 'Basilides'
etec[2] = 'Franco da Rocha'
etec[3] = 'Pirituba'

// Alphanumerically sorting
console.log(etec, '"Not sorted"')
console.log(etec.sort(), '"Sorted"')
// Ps: Sort only works correctly on strings based arrays


	// Numerically sorting
var numeros = Array()
numeros[0] = 7
numeros[9] = 55
numeros[55] = 80
numeros[3] = 11

// Error, because our index is not sequential. (javascript only will sort by index, if they are sequential)
console.log(numeros, 
	'Not sorted'
	);
// Error, because sort will consider our values as Strings, (ex: 1000 will be before 99)
console.log(numeros.sort(), 
	'Sorted with Sort (fail)'
	)


	// Creating a hard coded function that sort arrays
function arrayEmNumericos(a, b){
	return a - b
}

// We only need to pass the function reference and not call it, because then we would only receive it's return
console.log(numeros.sort(arrayEmNumericos),
	'Be careful with non-sequential indexes, because even if we sort, empty indexes will be shown there'
	)



// Array with automatic Indexes
var numbers = [79, 55, 80, 11];

// Array to receives the sorted values
let newNumbers = []


// Sorting without modifies the main array (using slice() and a new variable )
newNumbers = numbers.slice().sort( (a, b) => {
	return a - b;
})
console.log(`numbers sorted using slice is: ${numbers}, (unchanged)`)

console.log(`newNumbers is: ${newNumbers} (sorted)`)


// Sorting directly on the main array
numbers.sort( (a, b) => {
	return a - b;
})
console.log(`numbers after be directly sorted: ${numbers}`)