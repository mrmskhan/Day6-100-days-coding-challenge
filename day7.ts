//Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.

let guests: string[]= ["asif","amir","shahid","mustafa","ayan","danish"];
console.log(`i am invite ${guests.length} people to dinner`);




// Question 20: Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else 
// you’d like. Write a program that creates a list containing these items.

let city:string []=["karachi", "islamabad","lahore","peshawar"];
console.log(`i would like tp visit thease city ${city} `);




//Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface car {
    Name: string;
    model: string;
    year:number;
    color:string;
    isElectric:boolean;
};
let myCar: car = {
    Name:"Tesla",
    model:"Model super",
    year: 2024,
    color: "red",
    isElectric:true,
};
console.log(`Name: ${myCar.Name}, model: ${myCar.model}, year: ${myCar.year}, color: ${myCar.color}, is Electric: ${myCar.isElectric}, `);


