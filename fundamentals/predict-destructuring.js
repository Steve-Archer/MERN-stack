// 1.

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
// log has value of Tesla
console.log(otherRandomCar)
// log has value of Mercedes



// 2.
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
// error var name not defined as an error occured cannot destructure property
console.log(otherName);
// log has value of Elon



// 3.
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
// log has value of 12345
console.log(hashedPassword);
// log has value of undefined as hashedpassword was not defined as password is not a key in the person object


// 4.
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
// log has value of false as index 1 and index 3 have different values
console.log(first == third);
// log has a value of true as index 1 and index 8 both have a value of 2


// 5.
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
// log has a value of 'value'
console.log(secondKey);
// log has a value of [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);
// log has a value of 1
console.log(willThisWork);
// log has a value of 5


