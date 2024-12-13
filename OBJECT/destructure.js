const info ={
    name: 'John Doe',
    age: 30,
    course : "coding"
}

const {course:scourse} = info 

console.log(scourse);//coding
const {name:name} = info
console.log(name);

info.getsummery = function()
{
    console.log("this is add method");
    
}
info.getsummery();
