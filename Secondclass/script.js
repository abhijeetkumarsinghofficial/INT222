// function sum(){
// var a=5
// var b=6
// return a+b
// }
// console.log(sum())


// let a=10
// let b=5
// const sum =() =>a+b
// console.log(sum())




let a=10
let b=5
const sum =() =>{return a+b}
console.log(sum())



// let a=10
// const sum =(b) =>a+b
// console.log(sum(5))



// const sum =(a,b) =>a+b
// console.log(sum(5,6))
// return

// Challenge 1: Store the string "I am a" in one variable and store the other string "Kalvian" in other variable and concatenate both the string to get the output as "I am a Kalvain" using "+" operator.

let a ="I am a";
let b ="Kalvian";
let c = a+b;
console.log(c);


// Challenge 2: Store the given string in a variable and print the same in console. String: If you fail, never give up because FAIL means "First Attempt In Learning".

    let a =`If you fail, never give up because FAIL means "First Attempt In Learning"`;
    console.log(a);


// Challenge 3: Store a string in a variable and display the length of the string.

let a =`If you fail, never give up because FAIL means "First Attempt In Learning"`;
console.log(a.length);


// Challenge 4: Store a string in a variable and convert it into uppercase.

let a =`If you fail, never give up because FAIL means "First Attempt In Learning"`;
console.log(a.toUpperCase());


//Challenge 5: Store the string "I love programming" in a variable and replace the word programming with "JavaScript programming".

let a =`I love programming`;
console.log(a.replace("programming","JavaScript programming"));


// Challenge 6: Store a string in variable and print the string in console 3 times using repeat method.

let a =`I love programming\n`;
console.log(a.repeat(3));


//Challenge 7: Store the string as "I am a Kalvian" in a variable and convert the string into array and print the array in console


let a ="I am a Kalvian".split(" ");
console.log(a);

// let a ="I am a Kalvian";
// a.split(" ");
// Array.from(a);
// Object.assign([],a);
// console.log(a[7]);



// Challenge 8: Store the given string "Time and Tide wait for none" in a variable and using indexOf method find the index of "Ti" and print the same in console.

let a =`Time and Tide wait for none`;
console.log(a.indexOf("Ti"));


// Challenge 9: Store the given string "When life gives you lemons make lemonade" in a variable and find whether it includes "lemon".

let a =`When life gives you lemons make lemonade`;
console.log(a.includes("lemon"));


// Challenge 10: Store the given string "You must be the change you wish to see in the world." in a variable and use slice to console log the word "change" and use substring method to console log the word "world".

let a =`You must be the change you wish to see in the world.`;
console.log(a.slice(16,22));

let a =`You must be the change you wish to see in the world.`;
console.log(a.substring(46,51));


////////////////////////////// 2nd class //////////////////////////////

// Challenge 1: Create an Array "myFavSuperheroes" and add all your favourite superhero names as an array element (Please note, you should add atleast 5 names).

let myFavSuperheroes = ["Ironman","Thor","Hulk","Captain America","Black Widow"];
console.log(myFavSuperheroes);


// Challenge 2: Print (in console) the first superheroes name in your array "myFavSuperheroes".

let myFavSuperheroes = ["Ironman","Thor","Hulk","Captain America","Black Widow"];
console.log(myFavSuperheroes[0]);


// Challenge 3: Print (in console) the length of the array "myFavSuperheroes".


let myFavSuperheroes = ["Ironman","Thor","Hulk","Captain America","Black Widow"];
console.log(myFavSuperheroes.length);

// Challenge 4: Change the second last element in the Array "myFavSuperheroes" to your name and print the second last element in the array "myFavSuperheroes".

let myFavSuperheroes = ["Ironman","Thor","Hulk","Captain America","Black Widow"];
myFavSuperheroes[3]="Kalvian";
console.log(myFavSuperheroes[3]);


// Challenge 5: Add your friend's name (friend 1) to the array "myFavSuperheroes" at the start without using the splice method.

let myFavSuperheroes = ["Ironman","Thor","Hulk","Captain America","Black Widow"];
myFavSuperheroes.unshift("Kalvian");
console.log(myFavSuperheroes);


// Challenge 6: Add your friend's name (friend 2) to the array "myFavSuperheroes" at the end without using the splice method.

let myFavSuperheroes = ["Ironman","Thor","Hulk","Captain America","Black Widow"];
myFavSuperheroes.push("Kalvian");
console.log(myFavSuperheroes);

// Challenge 7: Remove your friend's name (friend1) in the array "myFavSuperheroes" without using the splice method.

let myFavSuperheroes = ["Ironman","Thor","Hulk","Captain America","Black Widow"];
myFavSuperheroes.shift();
console.log(myFavSuperheroes);



// Challenge 8: Remove your friend's name (friend2) in the array "myFavSuperheroes" without using the splice method.

let myFavSuperheroes = ["Ironman","Thor","Hulk","Captain America","Black Widow"];
myFavSuperheroes.pop();
console.log(myFavSuperheroes);


// Challenge 9: Add your friend's name (friend 1) to the array "myFavSuperheroes" at the 3rd position without removing any element using the splice method.

let a = ["Ironman","Thor","Hulk","Captain America","Black Widow"];
a.splice(2,0,"Kalvian");
console.log(a);


// Challenge 10: Remove the 4th and 5th element in the array "myFavSuperheroes", and add your friend's name (friend 2) at the 4th position using the splice method.

let a = ["Ironman","Thor","Hulk","Captain America","Black Widow"];
a.splice(3,2,"Kalvian");
console.log(a);


// Challenge 11: Create a nested array "superheroUniverse" and add 2 ararys to it, where first array should contain the name of the Marvel superheroes and second ararys should contain the name of the DC superhereoes.

let a = ["Ironman","Thor","Hulk","Captain America","Black Widow"];
let b = ["Superman", "Batman", "Wonder Woman", "Robin", "Martian Manhunter"];



// Challenge 12: Print one of the Marvel superhero name from the array "superheroUniverse".

let a = ["Ironman","Thor","Hulk","Captain America","Black Widow"];
console.log(a[0])

// Challenge 13: Print one of the DC superhero name from the array "superheroUniverse".



// Challenge 14: Print the length of the array "superheroUniverse".

// Challenge 15: Print the length of the first array in the array "superheroUniverse".

// Challenge 16: Print the length of the second array in the array "superheroUniverse".

// Challenge 17: Print the length of the first array in the array "superheroUniverse" without using the length property.

// Challenge 18: Print the length of the second array in the array "superheroUniverse" without using the length property.

// Challenge 19: Print the length of the array "superheroUniverse" without using the length property.





// MAKE SPREAD AND REST OPERATOR CHALLENGES


//spread operator


                var array1 = [10, 20, 30, 40, 50];
                var array2 = [60, 70, 80, 90, 100];
                var array3 = [...array1, ...array2];
                console.log(array3);



//rest operator


	function average(...args) {
		console.log(args);
		var avg =
			args.reduce(function (a, b) {
				return a + b;
		}, 0) / args.length;
		return avg;
	}
	console.log("average of numbers is : "
		+ average(1, 2, 3, 4, 5));
	console.log("average of numbers is : "
		+ average(1, 2, 3));

let size = sizeofarr()/sizeofarr[0];


//map

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);

console.log(newArr);

function myFunction(num) {
  return num * 10;
}


const numbers = [65, 44, 12, 4];
numbers.map(function(num) {
    console.log(num);
});



//filter

function myFunction(num) {
    return num >70;
  }
const numbers = [65, 44, 12, 4];
const newArr = numbers.filter(myFunction);

console.log(newArr);

//reduce

function myFunction(total, num) {

    return total + num;
    }
    
const numbers = [65, 44, 12, 4];
const newArr = numbers.reduce(myFunction);

console.log(newArr);






