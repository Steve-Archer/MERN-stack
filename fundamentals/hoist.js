// 1.
console.log(hello);                                   
var hello = 'world';                                 
// var hello hoisted
// console log of var hello with value of undefined 
// var hello given value of 'world'

// 2. 
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle hoisted
// function test hoisted
// var needle given value of 'haystack'
// function test runs - var needle given new value of 'magnet'
// console log of needle logs a value of 'magnet'

// 3. this one while declaring the function never actually calls it!
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan hoisted
// function print() hoisted
// var brendan given value of 'super cool'
// console log of brendan logs a value of 'super cool'


// 4.
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food hoisted
// function eat() hoisted
// var food given value of 'chicken'
// console log of food logs a value of 'chicken'
// function eat() is called
// food has value changed to 'half-chicken'
// console log of food logs a calue of 'half-chicken'
// food has calue changed to 'gone'

// 5. 
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// function mean() hoisted
// var food hoisted
// function mean() called
// var food given value of chicken
// console log of food logs value of chicken
// var food given value of fish
// console log of food logs value of fish
// console log of food logs value of fish

// 6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// var genre hoisted
// function rewind hoisted
// console log of genre logs a value of undefined
// var genre given global scope value of disco
// function rewind called
// var genre given value of rock
// console log of genre logs value of rock
// var genre given new value of r&b
// console log of genre logs value of r&b
// block scope is blocked and genre value returns to global value of disco
// console log of genre logs value of disco

// 7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// var dojo hoisted
// function learn() hoisted
// var dojo given global scope value of san jose
// console log of dojo logs value of san jose
// function learn() called
// var dojo given new value of seatlle
// console log of dojo logs value of seattle
// var dojo given new value of burbank
// console log of dojo logs value of burbank
// block scope is blocked and dojo value returns to global value of san jose
// console log of dojo logs value of san jose

// 8.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// syntax error - cant change value of declared const


