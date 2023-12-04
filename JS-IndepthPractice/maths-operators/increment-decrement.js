// These are postfix form

//Increment ++ increases a variable by 1
let counter = 2
counter++
console.log(counter)//3
//decerement -- decreased a variable by 1
let a = 2
a--;
console.log(a)//1

//Lets see now prefix form
let b = 1;
++b;
console.log(b);//2

let x = 1
let y = x++;
console.log(y) // 1 the postfix form x++ also increment x but returns the old value

let z = 0
z++
++z
console.log(z);//2


// - If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:


// - If we’d like to increment a value but use its previous value, we need the postfix form: