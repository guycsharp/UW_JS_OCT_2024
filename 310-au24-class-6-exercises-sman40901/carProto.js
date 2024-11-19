/**
 * Car class
 * @constructor
 * @param {String} model
 */
class Car {
    constructor(model) {
        this.model = model;
        this.currentSpeed = 0;
    }

    // accelerate = () => {
    //     this.currentSpeed++;
    // }

    // brake = () => {
    //     if (this.currentSpeed != 0) {
    //         this.currentSpeed--;
    //     }
    // }

    accelerate() {
        this.currentSpeed++;
    }

    brake() {
        if (this.currentSpeed != 0) {
            this.currentSpeed--;
        }
    }



    toString() {
        return `Model:${this.model} , Current speed:${this.currentSpeed}`
    }
}




//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const Taurus = new Car('Taurus');
Taurus.accelerate();

Taurus.accelerate();

Taurus.brake();

console.log(Taurus.toString());

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
class ElectricCar extends Car {
    constructor(model) {
        super(model)
        this.EV = true;
    }

    // accelerate = () => {
    //     super.accelerate();
    //     super.accelerate();
    // }

    accelerate() {
        super.accelerate();
        super.accelerate();
    }

    toString() {
        return super.toString() + ", EV : " + this.EV;
    }
}


//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

const Tesla = new ElectricCar('Tesla');
Tesla.accelerate();

Tesla.accelerate();

Tesla.brake();

console.log(Tesla.toString());
