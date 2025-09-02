/**
 * getArea: () => number; is a type declaration for a property named getArea whose value is a function that takes no arguments and returns a number.

getArea is the property name.
() means the function takes no parameters.
=> number means the function returns a number.
This is the function-type (arrow-style) notation used in type positions (interfaces, type aliases, etc.), not an actual arrow function implementation.

How it differs from a method signature
Compare:

Property function type: getArea: () => number;
Method signature: getArea(): number;
Both mean “something named getArea that can be called with no args and returns a number.” Differences to be aware of:

The property form declares the type of a value (a function-valued property).
The method form declares a method. In practice, a class with getArea(): number { ... } satisfies either interface form when implementing it.
The property form can be implemented by assigning an arrow function to a property (affecting this binding). The method form is placed on the prototype.
 */
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

const myRect = new Rectangle(10,20);

console.log(myRect.getArea());