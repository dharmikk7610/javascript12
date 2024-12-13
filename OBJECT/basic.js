//object:initilition

// litrial
const sm  = Symbol("key1");

let mypersonal={

    lang: ["c","java","js"],
    name: "dharmik",
    age : 20,
    "full_name" : "dp",
    gender: "male",
    city: "idar",
    insing :true,
    [sm]:"key2",

}
mypersonal.info = function()
{
    console.log("hello bachho..");
    
}
console.log(mypersonal.info());

console.log(mypersonal.name);
console.log(mypersonal.gender)
console.log( mypersonal.lang);
console.log(typeof mypersonal[sm]);
console.log(mypersonal["full_name"]);
console.log(typeof mypersonal);






