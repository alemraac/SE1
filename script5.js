class Dog{
    constructor (name, breed, color){
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.displayInfo = () =>{
            console.log("${this.name}is a ${this.breed} and is color ${this.color}");
        }
    }
}

Dog.prototype.eats = funtion(food)
    console.log(this.name + "eats" + food);

Dog.prototype.age = 2;

let Dog = new Dog("Koko", "Poodle", "Brown");
Dog.displayInfo();
Dog.eats(["dry food", "wet food", "Aozi"]);