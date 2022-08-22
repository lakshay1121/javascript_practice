console.log("we are in oops.js");

//objects literal


let car = {
    name:'maruti' , 
    topSpeed:89 , 
    run: function(){
        console.log("car is running.....");
    }
}

console.log(car.run());

//now we will see how the constructors are different from object literals.

// new Date();

//creating a constructor for cars.

function GeneralCar(givenname , highspeed){

    this.name = givenname;

    this.topSpeed = highspeed;

    this.run = function(){

        console.log(` ${this.name} is running...`);
    }

    this.analyze = function(){
        //200 is mercedes speed.

        console.log(`This car is slower by ${200 - this.topSpeed} Km/H Mercedes`);
    }
} 


car1 = new GeneralCar('Nisaan' , 180);
car2 = new GeneralCar('swift' , 100);
console.log(car1.analyze() , car2.analyze());




