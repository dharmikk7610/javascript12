/*
        String function
        1>indexof
        2>lastindexof
*/ 

let name  = "dp likewarp";

console.log(name.indexOf("w")); // 7
console.log(name.lastIndexOf("p")); // 10


let name1 = "madam"
let x = name1.length
let y;
for(let i=0;i<x/2;i++)
{
    //pallndrom check
    if(name1.indexOf(i)!=name1.lastIndexOf(x-i))  //
    {
        y = false;
        break;
    }
}
if(y)
{
    console.log(name1);
}