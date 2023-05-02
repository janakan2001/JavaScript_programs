let no1 = prompt("Enter the First Number :");
let no2 = prompt("Enter The Second Number :");
let no3 = prompt("Enter the third Number :");

if(no1>=no2 && no1>=no3)
{
    console.log(`${no1} is the largest`)
}
else if(no2>=no1 && no2>=no3) {
    console.log(`${no2} is the Largest`)
    
} 
else {
    console.log(`${no3} is the largest`)
    
}

let large = Math.max(no1,no2,no3);

console.log(`The greatest among the 3 nos is ${large}`)