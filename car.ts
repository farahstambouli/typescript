//Define an interface named Vehicle 
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }

  //Implement a class named Car that implements the Vehicle interface
  class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    start(): void {
        console.log("Car engine started");
      }
    }

    // instance of the Car class
    const myCar = new Car("BMW", "MINI COOPER", 2025);


    //Call the start method
    myCar.start();