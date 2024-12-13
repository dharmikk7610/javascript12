
// const science = (name)=>{
//     console.log(`${name} is science student`);
    
// }

// const school = (student,cb)=>
// {
   
//     cb( student.name);
// }

// let pr = 85;
// if(pr>80)
// {

//     school({name:"dharmik",age:16},science)
// }


const science = (name)=>{
    return (`${name} is science student`);
    
}

const school = (student,cb)=>
{
   
   return cb( student.name);
}

let pr = 85;
if(pr>80)
{
    let obj = {name:"dp",age:15}
    //let stream = "science"

    let x = school(obj,science)
    console.log(x);
}



