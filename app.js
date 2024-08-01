// // Challenge 1: Basic Class Definition
// // Task:

// // Define a class Person.
// // Add a constructor that takes name and age as parameters.
// // Add a method introduce that returns a string introducing the person, e.g., 
// // "Hi, my name is [name] and I am [age] years old."
// // 
// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     introduce (){
//         return `Hi, my name is ${this.name} and I am ${this.age} yeards old.`
//     }
// }

// const student01 = new Person('Santy','38')

// // console.log(student01)
// // console.log(student01.introduce())

// // Challenge 2: Adding Methods
// // Task:
// // Define a class Rectangle.
// // Add a constructor that takes width and height as parameters.
// // Add methods area and perimeter to calculate the area
// //  and perimeter of the rectangle.

// class Rectangle {
//     constructor(width, height){
//         this.width = width;
//         this.height = height;

//     }
//     area () {
//         let rectangleArea = this.width * this.height
//         return `the are of this rectangle is ${rectangleArea}`
//     }
//     perimeter () {
//         let rectanglePerimeter = 2 * (this.width + this.height)
//         return `the rectangle perimeter is ${rectanglePerimeter}`
//     }
// }

// // const greenRectangle = new Rectangle(10,20)
// // console.log(greenRectangle)
// // console.log(greenRectangle.area())
// // console.log(greenRectangle.perimeter())


// // Challenge 3: Inheritance
// // Task:
// // Define a class Animal with a constructor that takes name and 
// // a method speak that returns a generic message.
// // Define a class Dog that extends Animal.
// //  Override the speak method to return a message specific to dogs.

// class Animal {
//     constructor(name, color){
//         this.name = name;
//         this.color = color;
//     }
//     speak (){
//         return 'I am a Cat: MEOW!'
//     }

// }

// class Dog extends Animal {
//     constructor(name, color){
//         super(name, color)

//     }
//     speak (){
//         return 'I am a dog: WOOF!'
//     }
// }

// const myCat = new Animal('Archie','yellow')
// const myDog = new Dog ('Mac','black')

// // console.log(myCat)
// // console.log(myCat.speak())
// // console.log(myDog)
// // console.log(myDog.speak())

// // Challenge 4: Static Methods and Properties
// // Task:
// // Define a class Circle.
// // Add a constructor that takes radius as a parameter.
// // Add a static method circumference that calculates the circumference 
// // of a circle given a radius.

// class Circle {
    
//     static staticRadius = 20
//     constructor(radius){
//         this.radius = radius;
//     }
//     static circumference(){
//         return 2 * Math.PI * this.staticRadius;
//     }
//     static about (){
//         return this.staticRadius
//     } 
// }

// const circleK = new Circle(20)
// console.log(circleK)
// console.log(Circle.circumference())
// console.log(Circle.about())


// Challenge 6: Class with Getters and Setters
// Task:

// Define a class Car.
// Add a constructor that takes make and year as parameters.
// Add a getter method carInfo that returns a string with the car's make and year.
// Add a setter method carYear that allows updating the car's year.

class Car {
    constructor(make, year){
        this.make = make;
        this.year = year;
    }
    getInfo(){
        return `this is a ${this.make} from ${this.year}`
    }   
    carYear(year){
        this.year = year;
    }
}

const kimsCar = new Car('Honda','2018')
// console.log(kimsCar)
// console.log(kimsCar.getInfo())
kimsCar.carYear(2024)
// console.log(kimsCar)

// Challenge 7: Class with Static Properties
// Task:
// Define a class Library.
// Add a static property totalBooks that starts at 0.
// Add a constructor that takes name and books as parameters
//  and updates the total number of books whenever a new library is created.

class Library {
    static totalBooks = 0;
    constructor (name, books) {
        this.name
        this.books
        Library.totalBooks += books
    }
    static getTotalBooks () {
        console.log(`the total books are ${Library.totalBooks}`)
    }    
}


const centralLibrary = new Library('Central Library', 1500);
const southLibrary = new Library('South Library', 2000)
// console.log(Library.getTotalBooks())

// Challenge 8: Class with Array Property
// Task:
// Define a class Playlist.
// Add a constructor that initializes an empty array songs.
// Add methods to addSong and removeSong from the playlist.
// Add a method listSongs that returns a string with all the songs in the playlist.
class Playlist {
    constructor (){
        this.popList = [];
    }
    addSong (songName) {
        this.popList.push(songName)
    }
    removeSong (){
        this.popList.pop()
    }
    listSongs () {
        return this.popList
    }        
}

const myPlaylist = new Playlist()
console.log(myPlaylist)
myPlaylist.addSong('Yo te quiero para mi')
myPlaylist.addSong('Yo te quiero para nada')
console.log(myPlaylist)
myPlaylist.removeSong()
console.log(myPlaylist)



// Challenge 9: Class Inheritance with Super
// Task:
// Define a class Employee with a constructor that takes name and position as parameters.
// Add a method describe that returns a string describing the employee.
// Define a class Manager that extends Employee and takes an additional parameter department.
// Override the describe method to include the department information.



// Challenge 10: Class with Async Methods
// Task:
// Define a class DataFetcher.
// Add a method fetchData that simulates fetching data from an API (use setTimeout to mimic async behavior).
// Add another method logData that logs the fetched data once it's available.
// These challenges should help you practice a variety of class-related features in JavaScript. Enjoy coding!