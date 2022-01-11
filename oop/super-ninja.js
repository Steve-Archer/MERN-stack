class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log("The ninja's name is " + this.name)
    }
    showStats(){
        console.log("name: " + this.name + " ~ health: " + this.health + " ~ speed: " + this.speed + " ~ strength: " + this.strength)
    }
    drinkSake(){
        this.health += 10;
    }
}
let newNinja = new Ninja("Steve", 10);
newNinja.sayName();
newNinja.showStats();
newNinja.drinkSake();
newNinja.showStats();


class Sensei extends Ninja {
    constructor(name){
        super(name, 200);
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("One must drink Sake before speaking wisely")
    }
    showSenseiStats(){
        console.log("name: " + this.name + " ~ health: " + this.health + " ~ speed: " + this.speed + " ~ strength: " + this.strength + " ~ wisdom: " + this.wisdom)
    }
}
let sensei = new Sensei("Jon");
sensei.showSenseiStats();
sensei.speakWisdom();
sensei.showSenseiStats();