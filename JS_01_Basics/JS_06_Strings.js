const name ="Khaja"
const repoCount = 50;

console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Khaja-Beleri');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newanotherString ="  Khaja   ";
console.log(newanotherString);
console.log(newanotherString.trim());

const url = "https://khaja.com/khaja%20beleri";

console.log(url.replace('%20', '-'));

console.log(url.includes('khaja'));

console.log(gameName.split('-'));