// Write a function hasProperty that takes an object and a property name as arguments. It should return true if the property exists in the object and false otherwise.

function hasProperty(obj, propName) {
    return obj.hasOwnProperty(propName);
}

// Test the function
const car = { make: "Toyota", model: "Camry" };
console.log(hasProperty(car, "make"));   // Output: true
console.log(hasProperty(car, "year"));   // Output: false


