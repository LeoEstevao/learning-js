// We can use \ to scape special characters, like (\' \" \\)
let str = 'Leonardo\'s Dog\\Cat is pretty \"Smart\"';

specialCharacters = `
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator
`;

str = 'hello\bhello'
console.log(str)


// Length of characters of strings
console.log(str.length);

// Strings is a array of characters. We can't use arrays methods like map(), but we can return the character of an specific index
// Return the char at index 0 of the string
console.log(str[0]);

