//const fs = require("fs");

//fs.copyFileSync("file1.txt","file2.txt");                        //It makes a copy of source file 

// fs.copyFileSync('source.txt', 'destination.txt');


var superheroes = require('superheroes');
var supervillains = require('supervillains');
var mySuperheroName = superheroes.random();
var mySupervillanName = supervillains.random();


console.log(mySuperheroName);
console.log(mySupervillanName);
