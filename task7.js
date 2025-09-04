// Type your code below this line!

const prompt = require('prompt-sync')();

function Car(carData) {
  this.brand = carData.brand;
  this.model = carData.model;
  this.year = carData.year;
  this.color = carData.color;
  this.doors = carData.doors;
  this.mileage = carData.mileage;
  this.type = carData.type;
  this.engineCapacity = carData.engineCapacity;
  this.fuelTankCapacity = carData.fuelTankCapacity;
  this.horsePower = carData.horsePower;
  this.transmission = carData.transmission;
}

function getCarData() {
  const brand = prompt('Marca del coche: ');
  const model = prompt('Modelo del coche: ');
  const year = +prompt('Año del coche: ');
  const color = prompt('Color del coche: ');
  const doors = +prompt('Número de puertas: ');
  const mileage = +prompt('Kilometraje: ');
  const type = prompt('Tipo de coche (combustión/eléctrico): ');
  const engineCapacity = +prompt('Cilindraje del coche (en cc): ');
  const fuelTankCapacity = +prompt('Capacidad del tanque de combustible (litros): ');
  const horsePower = +prompt('Potencia del motor (caballos de fuerza): ');
  const transmission = prompt('Tipo de transmisión (manual/automática): ');

  return {
    brand,
    model,
    year,
    color,
    doors,
    mileage,
    type,
    engineCapacity,
    fuelTankCapacity,
    horsePower,
    transmission,
  };
}

const newCar = new Car(getCarData());
console.log(newCar);

// Type your code above this line!
