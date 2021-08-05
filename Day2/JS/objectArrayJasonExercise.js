console.log("Hello World!");

// Exercise 1 - my solition 
// let darthVader = { allegiance : "empire", weapon : "lightsabre", sith : "true"}
//     console.log(darthVader)

// Exercise 2 - community solution
let darthVader = {
    allegiance: "Empire",
    weapon: "lightsaber",
    sith: true
};

console.log(darthVader);

// Exercise 2 - my solution
console.log(`Darth Vader's allegence is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a jedi? ${darthVader.sith ? "false" : "true"}`);

// Exercise 3 - my solution
let myArray = ["Hello", "everyone"];
console.log(myArray);
console.log(myArray.length);
    
myArray.push("how","are","you");
console.log(myArray);
console.log(myArray.length);
myArray.shift();

for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
}

// Exercise 3 - part 6 community solution
for (let eachelement of myArray) {
    console.log(eachelement);
}