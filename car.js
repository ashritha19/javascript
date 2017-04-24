function Car(manufacturer, name, color) {
    //properties
    this.manufacturer = manufacturer;
    this.name = name;
    this.color = color;
}

//functionalities
Car.prototype.move = function () {
    console.log("The car is moving");
}

Car.prototype.park = function () {
    console.log("The car is parked");
}

var c1 = new Car("Maruti", "Swift", "grey");
console.log(c1);
c1.move();

var c2 = new Car("Hyundai", "i20", "red");
console.log(c2);
c2.move();
c2.park();

function BMW(manufacturer,name, color, model,price) {
    Car.call(this, manufacturer, name, color);

    this.model = model;
    this.price = price;
}

BMW.prototype.move = Car.prototype.move;
//Employee.prototype.eat=Person.prototype.eat;

BMW.prototype.park = function () {
    console.log("The BMW is parked");
}

var e1 = new BMW("BMW", "X5", 'black', 2016, 56000);
console.log(e1);
e1.move();
e1.park();
// JavaScript source code
