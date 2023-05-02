let no = prompt("Enter a number :");
let no1 = no;
let fact=1

while(no>0)
{
    fact = fact*no;
    no--;
}

console.log(`The factorial of the number ${no1} is ${fact}`)