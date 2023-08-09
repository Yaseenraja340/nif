// let x=Math.random()*10; //0-1 (0.1,0.2 upto 1)
// if (x > 8){
//     console.log(`value must be moe thsn ${x}`)
// } else if (x < 5){
//     console.log(`value must be less thsn ${x}`)
// } else {
//     console.log("hhh")
// }
// let country= ["Pakistan", "Turkey", "China"]
// let age= Math.round(Math.random()*90)
// let domocile= ["sindh", "punjab", "balochistan", "khyber"]
// // let index=Math.random()*10;
// // Domicile= sindh
// if (country[0] === "Pakistan"){
//     if (age >= 18) {
//         console.log("Here is your ticket")
//     }
// else{
//     console.error("Age Restriction")
// }
//  } else if(country[1] == "Turkey")
//   if (age>=30){
//   }else{
//   }
//   //.....
//   else {
//     console.log("Invalid country")
// }
var Team = ["waheed", "yaseen", "sultan", "arsal"];
console.log("Hum sub ka math ha or Raja ".concat(Team[0], " saab captain hayn"));
console.log("team ma aik or banda add karna par gya ha so ma Huzaifa ko b add kar raha ma socha ".concat(Team, "ko bata du"));
Team.push("huzaifa"); // yh akhit ma add kary ga
Team.pop(); //yeh wala akhri remove kry ga 
console.log(Team);
Team.shift(); ///yeh wala pehla remove kry ga
console.log(Team);
Team.unshift("usama"); // yh pehla add kary ga 
console.log(Team);
Team.splice(2, 0, "Waheed", "haseeb"); // kahi par b addition karni ho
console.log(Team);
var TeamA = Team.slice(0, 4);
console.log(TeamA);
