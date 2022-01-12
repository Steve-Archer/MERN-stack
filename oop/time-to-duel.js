class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, toughness){
        super(name, cost);
        this.power = power;
        this.toughness = toughness;
    }
    attack(target){
        target.toughness -= this.power;
    }
}

class Effect extends Card{
    constructor(name, cost, stat, magnitude){
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
    }
    playEffect(target){
        if (this.stat == "toughness"){
            target.toughness += this.magnitude;
        }
        if (this.stat == "power"){
            target.power += this.magnitude;
        }
    }
}

let redBeltNinja = new Unit('Red Belt Ninja', 3, 3, 4);
console.log(redBeltNinja);
let hardAlgorithm = new Effect('Hard Algorithm', 2, 'toughness', 2);
console.log(hardAlgorithm);
hardAlgorithm.playEffect(redBeltNinja);
console.log(redBeltNinja);
let blackBeltNinja = new Unit('Black Belt Ninja', 4, 5, 4);
console.log(blackBeltNinja);
let unhandledPromise = new Effect('Unhandled Promise Rejection', 1, 'toughness', -2);
unhandledPromise.playEffect(redBeltNinja);
console.log(unhandledPromise);
console.log(redBeltNinja);
let pairProgramming = new Effect('Pair Programming', 3, 'power', 2);
pairProgramming.playEffect(redBeltNinja);
console.log(pairProgramming);
console.log(redBeltNinja);
console.log(blackBeltNinja);
redBeltNinja.attack(blackBeltNinja);
console.log(blackBeltNinja);

