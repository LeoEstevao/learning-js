const param = 1

// Switch Case

switch (parseInt(param)) {

  case 1:
    console.log('param 1')
    break

  case 2:
    console.log('param 2')
    break

  default:
    console.log('Default')
}

// Ternary Operators:

// Ternary operator with true and false conditions return
console.log(param == 1? 'yes' : 'no');

// Ternary operator only with true condition return, and if is false condition, False (boolean) is returned
console.log(param == 1 && 'yes'); 
