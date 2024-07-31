// Challenge 1: Basic Class Definition
// Task:

// Define a class Person.
// Add a constructor that takes name and age as parameters.
// Add a method introduce that returns a string introducing the person, e.g., 
// "Hi, my name is [name] and I am [age] years old."
// 
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce (){
        return `Hi, my name is ${this.name} and I am ${this.age} yeards old.`
    }
}

const student01 = new Person('Santy','38')

// console.log(student01)
// console.log(student01.introduce())

// Challenge 2: Adding Methods
// Task:
// Define a class Rectangle.
// Add a constructor that takes width and height as parameters.
// Add methods area and perimeter to calculate the area
//  and perimeter of the rectangle.

class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;

    }
    area () {
        let rectangleArea = this.width * this.height
        return `the are of this rectangle is ${rectangleArea}`
    }
    perimeter () {
        let rectanglePerimeter = 2 * (this.width + this.height)
        return `the rectangle perimeter is ${rectanglePerimeter}`
    }
}

const greenRectangle = new Rectangle(10,20)
console.log(greenRectangle)
// console.log(greenRectangle.area())
// console.log(greenRectangle.perimeter())


// Challenge 3: Inheritance
// Task:
// Define a class Animal with a constructor that takes name and 
// a method speak that returns a generic message.
// Define a class Dog that extends Animal.
//  Override the speak method to return a message specific to dogs.

class Animal {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    speak (){
        return 'I am a Cat: MEOW!'
    }

}

class Dog extends Animal {
    constructor(name, color){
        super(name, color)

    }
    speak (){
        return 'I am a dog: WOOF!'
    }
}

const myCat = new Animal('Archie','yellow')
const myDog = new Dog ('Mac','black')

console.log(myCat)
console.log(myCat.speak())
console.log(myDog)
console.log(myDog.speak())

// Challenge 4: Static Methods and Properties
// Task:
// Define a class Circle.
// Add a constructor that takes radius as a parameter.
// Add a static method circumference that calculates the circumference of a circle given a radius.
// Challenge 5: Private Properties and Methods (ES2020+)
// Task:

// Define a class BankAccount.
// Add a constructor that takes balance as a parameter and stores it in a private field.
// Add methods to deposit and withdraw money, updating the private balance.
// These should give you a good variety of challenges to practice with! Let me know if you need any hints or further assistance.