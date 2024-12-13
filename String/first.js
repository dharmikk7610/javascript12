/*
        use main String function
        1>charAt(index)
        2>CharCode(character)//saw the ascii value
        3>fromCharCode(Ascii value) // saw the character
*/ 
/*
    a  = "my world "
    charAt(4)-->>w
    charCodeAt(4)-->>119
    fromCharCode(119)-->>w
    
*/


const data = "my name is dharmik"

let a = data.charAt(0);  //use  for which characater in given position
console.log(a); 

let b  = data.charCodeAt(0)  // saw the ascii value given position character
console.log(b);


let c = String.fromCharCode(97);
console.log(c);

// upper_case convertion : using fromcharcode

let user = "dharmik"
let upper_name =""
for (let i = 0; i < user.length; i++) {
    if(user.charCodeAt(i)>=97 && user.charCodeAt(i)<=122)
    {
        upper_name += String.fromCharCode(user.charCodeAt(i)-32)
    }
    else{
        upper_name += user[i];
    }
}

console.log(upper_name)


// use upper and lower case method
let x = "DHARMIK PRAJAPATI"
let y = "hello guezz"

y = y.toUpperCase();
x = x.toLowerCase();

console.log(x+y)




