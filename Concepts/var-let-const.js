// Too long to read:
// LET and CONST are safe ways to create our variables, because:
    // 1° - They can be re-declared on child escope without affects the parents escopes.
    // 2° - They can't be re-declared on the same escope level.
    // 3° - They can't be declared inside a escope and go up a escope level!

// VAR are not safe, because: 
    // 1° - They can be re-declared on child escope and have their parent values directly modified.
    // 2° - They can be declared inside lowers escopes and go up to global escope

// CONST can't have its values directly modified, only the values of it's references

let myLet = 'initial let.';
// let myLet = 'Second myLet declared'; // Syntax ERROR
const myConst = 'initial const.';
// const myConst = 'Second myConst declared'; // Syntax ERROR

if(true){
    // if we try access a let/const before they were re-declared (at the same escope), an error will occur (can't access "LET/CONST" before initialization), because javascript will ignore the let/const declared in the scopes above

    // console.log(myLet); // Syntax error (can't access before initialization)
    let myLet = 'Re-declared let.';
    console.log(myLet, ' myLet inside if() escope');
}
console.log(myLet, ' myLet back on GLOBAL escope');
    
    
var myVar = 'Initial global';
var myVar = 'Re-declared Global'; // WORKS and changes the value

console.log(myVar);
// We can re-declare VAR inside functions and change it's value globally
if(true){
    var myVar = 'Re-Declared inside first-child Escope.';
    if(true){
        var myVar = 'Re-Declared inside second-child Escope.';
    }
}
console.log('Back to global escope, the final value is: ', myVar);

// Quando declaramos LET, VAR or CONST dentro de uma funcao, elas NAO SAEM do escopo
// When we declare LET, VAR or CONST inside a function, they won't leave the escope
function oi(){
    var varEscope = "I won't leave this escope";
    let letEscope = "I won't leave this escope";
    const constEscope = "I won't leave this escope";
}
// console.log(varEscope); // Won't work
// console.log(letEscope); // Won't work
// console.log(constEscope); // Won't work

// HOWEVER, if we declare a VAR inside a conditional or loop escopes, it'll leave the escope (VAR only)

if(true) {
    var varEscope = "I'll leave this escope";
    let letEscope = "I won't leave this escope";
    const constEscope = "I won't leave this escope";
}

console.log(varEscope);  // Work
// console.log(letEscope); // Won't work
// console.log(constEscope); // Won't work

// CONST can't have its values directly modified. But if a const value is a reference to an object/array/function, the value of it's reference can be changed and affected in the displayed information of that CONST

const constant = 'initial value';
// const constant = 'valor2'; << Syntax ERROR
// constant = 'valor2'; << Syntax ERROR

console.log(constant);

const arrConstant = ['Const instantiated (arr value)'];
console.log(arrConstant);
arrConstant[0] = 'Arr value altered';// << WORK
console.log(arrConstant);