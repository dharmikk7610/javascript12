let a =[10,22,4,55,25];

for(let i=0;i<a.length;i++)
{
    console.log(a[i]);
}
let x=0,y=0
let sum=a[0];

for(i=1;i<a.length;i++)
{
    sum+=a[i]
    if(a[x]>a[i])
    {
        x=i;
    }
    if(a[y]<a[i])
    {
        y=i;
    }
}
console.log(`min no:${a[x]}`)
console.log(`max no:${a[y]}`)
console.log(`total sum:${sum}`)

console.log(typeof(a))



