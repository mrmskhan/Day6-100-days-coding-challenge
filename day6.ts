// //Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.

let guests: string[]= ["asif","amir","shahid","mustafa","ayan","danish"];
console.log(("Good news, my child's first birthday is this Sunday."))
//add guest
guests.push("sadia");
guests.splice(guests.length / 3,0, "maria");
guests.unshift("saleem");
guests.forEach(guest =>    {
console.log(`dear ${guest}, i invite to you dinner for my child 1st birthday on this sunday 7 pm`);
});


// //Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
let guest: string[]= ["asif","amir","shahid","mustafa","ayan","danish"];
console.log(("I invite only two person my child's first birthday is this Sunday."))
while (guest.length >2){
    let remove=guest.pop()
    console.log(`sorry ${remove} i invite only two person`)
}
guest.slice(1,2);
guest.forEach(guest =>    {
console.log(`dear ${guest}, i invite to you dinner for my child 1st birthday on this sunday 7 pm`);
});


// Question 18: Seeing the World: Think of at least five places you’d like to visit.

let place:string[]=["Japan","Egypt","istanbol","Paris","Farance"]
console.log("original conition:", place);
console.log("alfabatical condition:", [...place].sort());
console.log("original conition:", place);
console.log("revers alfabatical condition:", [...place].sort().reverse());
console.log("original conition:", place);
place.reverse();
console.log("reverce condition",place);
place.sort();
console.log("alfabetical condition",place);
place.reverse();
console.log("reverce condition",place);



