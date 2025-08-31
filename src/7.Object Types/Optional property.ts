// no error on optional property, remove it and see what happens
const car: { type: string, mileage?: number } = {
  type: "Toyota"
};

car.mileage = 2000;

console.log(car); // { type: 'Toyota', mileage: 2000 }