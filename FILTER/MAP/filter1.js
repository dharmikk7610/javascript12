let ages = [12,23,44,22,15,34,32,66];
let a =ages.filter(
    (age)=>{
            return age>25;
    }
)
console.log(a);

let x = ages.map(
    (age)=>age+5
)
console.log(x);

const h =ages.filter(
   (age)=>{
    return age=20;
   }
)