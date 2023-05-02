let it1 = parseInt(prompt("Enter the first interval :"));
let it2 = parseInt(prompt("Enter the second Interval :"));

for(let i=it1;i<=it2;i++)
{
    let ans = isPrime(i);
    if(ans==true)
    {
        console.log(`${i} is a Prime Number`)
    }
   
}

function isPrime(x)
{
    let ct=0;

    for(let i=1;i<=x;i++)
    {
        if(x%i==0)
        {
            ct++;
        }
    }
    if (ct==2)
    {
        return true;
    }
    else{
        return false;
    }
}