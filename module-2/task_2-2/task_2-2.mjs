"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const Matte = "2 + 3 * 2 - 4 * 6";
const Matte2 = "2 + 3 * (2 - 4) * 6";
let  math = 2 + 3 * (2 - 4) * 6;
printOut(Matte);
printOut(Matte2);
printOut(math);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let mm = (25*10000) + (34*10);
let milperinch = 25.4;
let sumpart = mm / milperinch;
printOut(mm);
printOut(milperinch);
printOut(sumpart);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const dag = 3
const Timer = 14
const min = 14
const sec = 45
let totalTime = (dag * 24 * 60 * 60) + (Timer * 60 * 60) + min  + (sec/60);
printOut(totalTime + " seconds");

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let part4TotalDays = 6322.52/(24*60);
let wholedays = Math.floor(part4TotalDays);

let leftover = part4TotalDays - wholedays;
let totalhours = leftover*24;
let wholehours = Math.floor(totalhours);

leftover = totalhours - wholehours;
let totalminutes = leftover*60;
let wholeminutes = Math.floor(totalminutes);

leftover = totalminutes - wholeminutes;

let totalseconds = leftover*60;
let wholeseconds = Math.floor(totalseconds);

printOut(wholedays + " days, " + wholehours + " hours, " + wholeminutes + " minutes, and " + wholeseconds + " seconds.");

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let usd = 52
let nok = usd * 9.30
printOut(usd + " Dollars");
printOut(nok + " Kroner");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text = "There is much between heaven and earth that we do not understand.";
printOut("Tekst: " + text);

printOut("Antall tegn: " + text.length);

printOut("Tegn på posisjon 19: " + text.charAt(19));

printOut("8 tegn fra posisjon 35: " + text.slice(35, 35 + 8));

printOut("Startindeks for 'earth': " + text.indexOf("earth"));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("5 > 3: " + (5 > 3));
printOut("7 >= 7: " + (7 >= 7));
printOut("'a' > 'b': " + ("a" > "b"));
printOut("'1' < 'a': " + ("1" < "a"));
printOut("'2500' < 'abcd': " + ("2500" < "abcd"));
printOut("'arne' !== 'thomas': " + ("arne" !== "thomas"));
printOut("2 === 5: " + (2 === 5));
printOut("!('abcd' > 'bcd'): " + (!("abcd" > "bcd")));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("parseInt('254'): " + parseInt("254"));
printOut("parseFloat('57.23'): " + parseFloat("57.23"));
printOut("parseInt('25 kroner'): " + parseInt("25 kroner"));

console.log(parseFloat("57.23"));
console.log(parseInt("25 kroner"));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const r = Math.floor(Math.random() * 360) + 1;
printOut("Tilfeldig tall (1-360): " + r);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const task10Days = 131;

const weeks = Math.floor(task10Days / 7);
const remainingDays = task10Days % 7;

printOut(`${task10Days} dager er ${weeks} uker og ${remainingDays} dager.`);
printOut(newLine);