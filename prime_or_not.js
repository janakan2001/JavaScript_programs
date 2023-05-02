let no = prompt("Enter a number :");
let res = isPrime(no);

if(res==true)
{
    console.log("Prime")
}
else{
    console.log("not prime")
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