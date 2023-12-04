let a = 1, b = 1;
let c = ++a;
let d = b++;// post fix form return old value
console.log(a)//2
console.log(b)//2
console.log(c)//2
console.log(d)//1

//Type conversion
console.log(""+1+0)//"1"
console.log(""-1+0)//-1
console.log(true+false)
console.log(6/"3") //3
console.log(3+6+"pd")//"9pd"
console.log("$"+3+3)//"$33"
console.log("6"-2)//4
console.log("4p"-2)//NaN
console.log(null+1)//1 here null becomes 0
console.log(undefined+1)//NaN //here undefined becomes NaN after numberic conversion

