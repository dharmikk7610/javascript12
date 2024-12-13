// Create an object userVisit with properties like userName, city, placesVisited, and a method addPlace that adds a place to placesVisited.

const uservisit = {
    username : "dp@123",
    city : "bangalore",
    placesVisited : ["ahm","gandhi","idar"],
    addPlace : function(place){
        this.placesVisited.push(place);
    }

}

uservisit.addPlace("jamnagar");
console.log(uservisit.placesVisited);



// console.log(uservisit.placesVisited);
