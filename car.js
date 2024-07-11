//Implement a class named Car that implements the Vehicle interface
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// instance of the Car class
var myCar = new Car("BMW", "MINI COOPER", 2025);
//Call the start method
myCar.start();
