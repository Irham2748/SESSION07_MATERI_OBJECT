// ====================================================================================================================================
////////////
// OBJECT //
////////////
/* key value pair */
/* Value : function, key : method */
/* Value : selain function, key : property */

/* literal */
// const data = {
//     name : "Muhammad Irham", 
//     pets : ["cat", "fox", "bird"], 
//     active : true, 
//     height : 170,
//     play : function (game) {console.log(`Playing ${game}`)}
// }
// console.log(data);
// data.play("FIFA")

//////////////////////
// ACCES WITH DOT . //
//////////////////////
// console.log(data.name);
// console.log(data.pets);
// data.play("FIFA")

// var addPets = data.pets
// console.log(addPets);
// addPets.push("dog");
// console.log(addPets);
// addPets.splice(1, 2, "lion", "snake")
// console.log(addPets);
// addPets.unshift("giraffe")
// console.log(addPets);
// var addPets1 = addPets.slice(1, 3);
// console.log(addPets1);
// addPets1.splice(1, 0, "crocodile", "crab")
// console.log(addPets1);
// addPets1.push("dolphin")
// console.log(addPets1);

/////////////////////////////
// ACCESS WITH BRUCKETS [] //
/////////////////////////////
// console.log(data["name"]);
// console.log(data["height"]);
// console.log(data["active"]);
// data["play"]("FIFA")

////////////////////
// CHANGING VALUE //
////////////////////
// data.active = false;
// console.log(data);

/////////////////
// ADD NEW KEY //
/////////////////
// data.name = "Ami Latifah"
// console.log(data);
// data.play("GTA")
// ====================================================================================================================================

// ====================================================================================================================================
///////////
// CLASS //
///////////
// // Example 1 : 
// class Pemain {
//     constructor (name, age, position, team) {
//         this.Name = name
//         this.Age = age
//         this.Position = position
//         this.Team = team
//     }
//     intro() {
//         console.log(`Hello, my fullname is ${this.Name}, age ${this.Age}, ${this.Position}, ${this.Team}`);
//     }
// }
// const muhammad_irham = new Pemain ("Muhammad Irham", 24, "Penyerang", "Semen Padang");
// const ami_latifah = new Pemain ("Ami Latifah", 25, "Defender", "PSPS Riau")
// console.log(muhammad_irham);
// console.log(ami_latifah);
// muhammad_irham.intro()
// ami_latifah.intro()

// // Example 2 :
// class Data2 {
//     constructor (name, age, position, team, nationality) {
//         this.Name = name; 
//         this.Age = age;
//         this.Position = position;
//         this.Team = team;
//         this.Nationality = nationality;
//     }
// }

// const pemain2 = new Data2 ("Ami Latifah", 25, "Defender", "PSPS Riau", "Indonesia")
// console.log(pemain2);
// ====================================================================================================================================
// ====================================================================================================================================
/////////////////
// INHERITANCE //
/////////////////

// class Player {
//     constructor (name, nickname, nationality) {
//         this.Name = name
//         this.Nickname = nickname
//         this.Nationality = nationality
//     }
//     intro () {
//         console.log(`My name is ${this.Name} but you can call me ${this.Nickname}`);
//     }
// }

// Example 1 :
// // Dengan extends ke Class Player 
// // Semua propeties dan methods milik Player akan diturunkan ke CasualPlayer
// class CasualPlayer extends Player {
//     constructor(name, nickname, nationality, job) {
//         // memangggil constructor milik Player 
//         super(name, nickname, nationality)
//         this.Job = job
//     }
//     myJob () {
//         console.log(`I'm not pro player so i have a job, that is ${this.Job}`);
//     }
// }

// const muhammadIrham = new CasualPlayer("Muhammad Irham", "Irham", "Indonesia", "Software Engineer")
// console.log(muhammadIrham);
// muhammadIrham.intro()
// muhammadIrham.myJob()

// Example 2 :
// // Dengan extends ke Class Player 
// // Semua propeties dan methods milik Player akan diturunkan ke CasualPlayer
// class ProPlayer extends Player {
//     constructor(name, nickname, nationality, team) {
//         // memanggil construtor milik Player
//         super(name, nickname, nationality)
//         this.Team = team
//     }
//     myTeam () {
//         console.log(`I'm a pro player so i have a team, that is ${this.Team}`);
//     }
// }

// const ami_latifah = new ProPlayer("Ami Latifah", "Ami", "Indonesia", "EVOS")
// console.log(ami_latifah);
// const ami_latifah = new Player("Ami Latifah", "Ami", "Indonesia")
// console.log(ami_latifah);
// ami_latifah.intro()
// ami_latifah.myTeam()
// ====================================================================================================================================

// ====================================================================================================================================
/////////////////////////////////
// OBJECT FOR EVERY DATA TYPES //
/////////////////////////////////
// ====================================================================================================================================

// ====================================================================================================================================
////////////////////////////////////////
// Primitive : String, Number, Boolean //
////////////////////////////////////////

// // String
// const priStr = "Today is rainning"
// console.log(priStr);
// console.log(priStr.toLowerCase() + " " +'This is "toLowerCase"');
// console.log(priStr.toUpperCase() + " " +'This is "toUpperCase"');
// console.log(priStr.length);
// console.log(typeof(priStr));

// const objStr = new String ("Today is sunny")
// console.log(objStr);
// console.log(objStr.toLowerCase());
// console.log(objStr.toUpperCase());
// console.log(objStr.length);
// console.log(typeof(objStr));

// // Number 
// const priNum = 400000
// console.log(priNum);
// console.log(typeof(priNum));
// console.log(priNum.toLocaleString("id"));
// console.log(priNumtoString());

// var objNum = new Number (450000000)
// console.log(objNum);
// console.log(typeof(objNum));
// console.log(objNum.toLocaleString("id"));
// console.log(objNum.toString());

// Boolean
// const priBoolean = true
// console.log(typeof(priBoolean));

// const objBoolean = new Boolean (false)
// console.log(typeof(objBoolean));
// ====================================================================================================================================

// ====================================================================================================================================
//////////////////////////////////////////////////////////////////
// Object : Array, Object string, Object number, Object boolean //
//////////////////////////////////////////////////////////////////

// // Array 
// const priArray = [1,2,3,4,5]
// console.log(typeof(priArray));

// const objArray = new Array([1,2,3,4,5])
// console.log(typeof(objArray));

// // Object 
// const priObject = {nama : "Muhammad Irham"}
// console.log(typeof(priObject));

// const objObject = new Object({nama : "Muhammad Irham"})
// console.log(typeof(objObject));
// ====================================================================================================================================