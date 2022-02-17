str = `Some METHODS to use strings`;

// slice(start, end) - Return the part of a string
console.log(
    str.slice(5, 15)
);

// Using negative indexes, will be from the end to beginning
console.log(
    str.slice(-40, -15)
);

// substring(start, end) - Return the part of a string
console.log(
    str.substring(5, 15)
);
// PS: Cannot accept negative indexes


// substr(start, length) - Return the part of a string
console.log(
    str.substr(5, 10)
);

// replace(search, valueToReplace) - Return the string with value replaced
console.log(
    str.replace('METHODS', 'FUNCTIONS')
);
// PS: replace() is Case Sensitive


// toUpperCase() - Return the string in Upper Case
console.log(
    str.toUpperCase()
);

// toLowerCase() - Return the string in Lower Case
console.log(
    str.toLowerCase()
);

// concat(valToConcat) - Return string with values concatenated
console.log(
    str.concat(' Concatenated')
);

// trim() - Return a string without blank spaces in the beginning or end of string
console.log(
    str.trim()
);

// padStart(length, valToFill) - Return a string with a minimum length
console.log(
    "982".padStart(8, 0)
);

// padEnd(length, valToFill) - Return a string with a maximum length
console.log(
    str.padEnd(40, '~')
);

// charAt(index) - Return the character at the specific index
console.log(
    str.charAt(3)
);

// charCodeAt(index) - Return the UTF-16-Code (0~65535) character at the specific index
console.log(
    str.charCodeAt(3)
);

// split(valToSearchAndSplit) - Return the string split into array (passing empty, will split every characters)
console.log(
    str.split('')
);

// split(valToSearchAndSplit) - Return the string split into array (will split every blank space separated word)
console.log(
    str.split(' ')
);