/*
    1. Create a let variable called "points" and print it out
    2. Assign "points" the number 20 and print it out
    3. Add 15 to "points" and print it out

    Question1: What are all the ways you can achieve step 3 above?
    Question2: What would happen if you tried to do this with a const variable?
*/
let points;
console.log(points);// undefined not intialized

points = 20
console.log(20)
points += 15
console.log(points)

// in const we have to assign the variable and its value immediatley we cannt do it later like let

/*
    1. What happens when you add 2 strings together?
    2. What about when you add a number to a string?
    3. How about when you add booleans together?

    Try to think about how these behaviours might work,
    as well as why it might happen.
*/

let a = "dod";
a += "asdfa";
console.log(a);

let v = 'a'+10;
console.log(v);

let bool = true+false
console.log(bool)
