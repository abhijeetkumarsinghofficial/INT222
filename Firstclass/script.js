// Challenge 1: Perform the addition operation (add x and y) and print the answer in the console.

const x=5;
const y=10;
console.log(x+y);

// Challenge 2: Perform the Subtraction operation (subtract y from x) and print the answer in the console.

const aa=5;
const bb=10;
console.log(bb-aa);

// Challenge 3: Perform Multiplication operation (multiply x from y) and print the answer in console.

const c=5;
const d=10;
console.log(c*d);

// / Challenge 4: Perform Division operation (Divide x by y) and print the answer in console.

const e=5;
const f=10;
console.log(f/e);

// / Challenge 5: perform division operation (divide x by y) and print the remainder in console.

const g=5;
const h=10;
console.log(h%g);

// Challenge 6: Perform Exponent operation (Divide x by y) and print the answer in console.

const i=5;
const j=10;
console.log(j**i);

// Challenge 7: calculate "x" to the power of the "y" and print the answer in console.

const k=5;
const l=10;
console.log(k**l);

// / Challenge 8: Decrement the value of the variable "z" by 1 and print the z value in the console.

const z=5;
console.log(--z);

// Challenge 9: Perform Addition assignment operation to the variable a;

const a=5;
console.log(a+=5);

// Challenge 10: Perform Subtraction assignment operation to the variable b;

const b=5;
console.log(b-=5);

// / Challenge 11: Perform Multiplication assignment operation to the variable c;

const cc=5;
console.log(cc*=5);

// Challenge 12: Perform Division assignment operation to the variable c;

const dd=5;
console.log(dd/=5);

// Challenge 13: Perform 2 Strict equality Comparison operations, in which one should return true and one should return false.

const ee=5;
const ff=10;
console.log(ee===ee);
console.log(ee===ff);

// Challenge 14: Perform 2 Strict-non-equality Comparison operations, in which one should return true and one should return false.

const gg=5;
const hh=10;
console.log(gg!==gg);
console.log(gg!==hh);

// Challenge 15: Perform 2 Less than Comparison operations, in which one should return true and one should return false.

const ii=5;
const jj=10;
console.log(ii<jj);
console.log(ii<ii);

// Challenge 16: Perform 2 Greater than Comparison operations, in which one should return true and one should return false.

const kk=5;
const ll=10;
console.log(kk>ll);
console.log(kk>kk);


// Challenge 17: Perform 2 Less than or equal to Comparison operations, in which one should return true and one should return false.

const mm=5;
const nn=10;
console.log(mm<=nn);
console.log(mm<=mm);

// Challenge 18: Perform 2 Greater than or equal to Comparison operations, in which one should return true and one should return false.

const oo=5;
const pp=10;
console.log(oo>=pp);
console.log(oo>=oo);



// OBJECTS

// Step 1: Create an object for storing your profile information. The object name can be "studentProfile". below are the keys which are to be added to the object, please add your values for the same:

// studentName,
// studentAge,
// cohortName,
// location,
//hobbies

const studentProfile={
    StudentName:"Raj",
    StudentAge:25,
    cohortName:"Firstclass",
    location:"Bangalore",
    hobbies:"Reading"
}

// Step 2: Add more then one hobby in the student object.
//Hint: Use Arrays

const studentProfile1={
    StudentName:"Raj",
    StudentAge:25,
    cohortName:"Firstclass",
    location:"Bangalore",
    hobbies:["Reading","Playing"]
}

// Challenge 1.2: Access the studentName value of the object "studentProfile" using dot "." notation and print the same in console.

console.log(studentProfile.StudentName);

// /Challenge 1.3: Access the cohortName property of the object using Bracket notation ([]).

console.log(studentProfile["cohortName"]);

//Challenge 2.1: Create an object using the constructor function for storing the book information. The object name can be "Book". Include the following values .
//title
//author

function Book(title,author){
    this.title=title;
    this.author=author;
}


// /Challenge 2.2: Access the title property of the object "Book" and print the same in console.

const book1=new Book("The Alchemist","Paulo Coelho");
console.log(book1.title);


// control statements

// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.

for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}


// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.

let count=0;
while(count<=100){
    if(count%2!=0){
        console.log(i);
    }
    i++;
}


// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.

let count1=0;
do{

    if(count1%3==0){
        console.log(count1);
    }
    count1++;
}while(count1<=100);



// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.


for(let i=2;i<=100;i++){
    let isPrime=true;
    for(let j=2;j<i;j++){
        if(i%j==0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        console.log(i);
    }
}



const submitButton1 = document.getElementById('button1');
const commentContainer1 = document.getElementById('comment-container1');
var message1;

submitButton1.onclick = () => {
let numberInput1 = document.getElementById('number-input1').value;

// Challenge 1: Use if else condition to store the respective comments in the variable "message1" based on the score input.
// when the user gives a number input and clicks on the submit button, the respective comments should be displayed.
// Here are the values and their respective comments
// Score of less than 0 or more than 100 — “This is not possible. An error has occurred.”
// Score of 0 to 19 — “That was a terrible score!”
// Score of 20 to 39 — “You know some things. Needs improvement.”
// Score of 40 to 69 — “You did a passable job, not bad!”
// Score of 70 to 89 — “That’s a great score. You really know your stuff.”
// Score of 90 to 100 — “What an amazing score!”

if(numberInput1<0 || numberInput1>100){
    message1="This is not possible. An error has occurred.";
}
else if(numberInput1>=0 && numberInput1<=19){
    message1="That was a terrible score!";
}
else if(numberInput1>=20 && numberInput1<=39){
    message1="You know some things. Needs improvement.";
}
else if(numberInput1>=40 && numberInput1<=69){
    message1="You did a passable job, not bad!";
}
else if(numberInput1>=70 && numberInput1<=89){
    message1="That’s a great score. You really know your stuff.";
}
else if(numberInput1>=90 && numberInput1<=100){
    message1="What an amazing score!";
}

commentContainer1.innerHTML = message1;
}



///////////////////////////////////////////////////

const submitButton2 = document.getElementById('button2');
const commentContainer2 = document.getElementById('comment-container2');
var message2;

submitButton2.onclick = () => {
let numberInput2 = document.getElementById('number-input2').value;

// Challenge 2: Use Switch statements to store the respective comments in the variable "message2" based on the input.
// when the user gives a number input and clicks on the submit button, the respective comments should be displayed.
// Here are the values and their respective comments
// Score of less than 0 or more than 100 — “This is not possible. An error has occurred.”
// Score of 0 to 19 — “That was a terrible score!”
// Score of 20 to 39 — “You know some things. Needs improvement.”
// Score of 40 to 69 — “You did a passable job, not bad!”
// Score of 70 to 89 — “That’s a great score. You really know your stuff.”
// Score of 90 to 100 — “What an amazing score!”

switch(numberInput2){
    case numberInput2<0 || numberInput2>100:
        message2="This is not possible. An error has occurred.";
        break;
    case numberInput2>=0 && numberInput2<=19:
        message2="That was a terrible score!";
        break;
    case numberInput2>=20 && numberInput2<=39:
        message2="You know some things. Needs improvement.";
        break;
    case numberInput2>=40 && numberInput2<=69:
        message2="You did a passable job, not bad!";
        break;
    case numberInput2>=70 && numberInput2<=89:
        message2="Thats a great score. You really know your stuff.";
        break;
    case numberInput2>=90 && numberInput2<=100:
        message2="What an amazing score!";
        break;
}

commentContainer2.innerHTML = message2;
};


