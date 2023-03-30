function myFunction(total, num) {

    return total + num;
    }
    
const numbers = [65, 44, 12, 4];
const newArr = numbers.reduce(myFunction);

console.log(newArr);