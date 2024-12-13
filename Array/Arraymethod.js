/*

Array method:
------------
1>push: add elements end of array.
2>pop: delete elements end of array and return.
3>toString: converts array to string.
4> unshift(): add elements to start of array.
5>shift(): deletes elements to start of array.
6>splice(startindex ,delcount,newelements): change the original array 
ex:
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	//At position 2, add "Lemon" and "Kiwi":
	//fruits.splice(2, 0, "Lemon", "Kiwi");

*/ 

var name =["java","c++","kotlin","js"]
name.push("AI");
name.shift()
name.unshift("dp")
name.splice(2,0,"jk")
name.toString();
console.log(typeof(name));
console.log(name)