// Creating an array/vetor
let creatingArray1 = Array()
let creatingArray2 = []
// Ps: We must first create a variable then transform it into an array

// Inserting datas hardcode
let etec = ['Etec Jaragua', 'Etec Pirituba']

// Copying an Array
let newEtec = [...etec];
// OR let newEtec = etec.slice();
console.log(newEtec, 'NEW ETEC HERE')

// Be Careful!
// let newEtec = etec; It'll only copy it's reference. So, the changes on etec will be displayed on newEtec.


// two-dimensional vectors
etec['Etec Pirituba'] = ['Students'] 
etec['Etec Pirituba']['Students'] = []

etec['Etec Jaragua'] = ['Students'] 
etec['Etec Jaragua']['Students'] = ['Moacir', 'Didi', 'Jica', 'Cleito'];

// Inserting a record in the end of the array
etec['Etec Pirituba']['Students'].push('Moacir', 'Didi', 'Jica', 'Cleito');

// Inserting a record in the beginning of the array
etec['Etec Jaragua']['Students'].unshift('Unshift')

// Deleting the last record of the array
etec['Etec Pirituba']['Students'].pop()

// Deleting the first record of the array
etec['Etec Pirituba']['Students'].shift()

console.log(etec)

// The length of an array, return the amount of records at the same level
// It means that the length will not count lower level two-dimensional vector
console.log(etec.length);
console.log(etec['Etec Jaragua'].length);
console.log(etec['Etec Jaragua']['Students'].length);

