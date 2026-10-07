"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
const Våkne = 8;
if (Våkne === 7) {
  printOut("If I wake up at exactly 7 o'clock then I can catch the bus to school.");
}
else if (Våkne === 8) {
  printOut("If I wake up at 8 o'clock then I can catch the train to school.");
}
else {
  printOut("Otherwise I have to take the car to school.");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const tall = 0;
if (tall < 0) {
  printOut("the number is negative");
} else if (tall > 0) {
  printOut("the number is positive");
} else {
  printOut("the number is zero");
}
printOut(newLine);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const roulette = Math.random() * 9;
printOut("The number is: " + roulette);
if (roulette < 4) {
  printOut("The file is too small");

}else if (roulette > 6) {
  printOut("The file is too large");

}else {
  printOut("Thank you");
}

printOut(newLine);
printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
printOut("The month is: " + monthName);
const tekst = "Skole";

if (monthName.includes("r")) {
  printOut("you must take vitamin D");
}else {
  printOut("you don't need to take vitamin D");
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let days = 0;

if (monthName === "February") {
  days = 28;
} else if (monthName === "April" || monthName === "Jun" || monthName === "September" || monthName === "November") {
  days = 30;
} else {
  days = 31;
}

printOut("Month: " + monthName + " has " + days + " days.");
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let galleri = "";
if (monthName === "April") {
  galleri = ("Open next door");
} else if (monthName === "Mars" || monthName === "Mai") {
  galleri = ("Closed for refurbished");
} else {
  galleri = ("åpen");
}
printOut("Galleri: " + galleri);

printOut(newLine);
