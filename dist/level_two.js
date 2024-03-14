"use strict";
//INTERFACES : problem statement - how would you pass an object as an argument to a function --best way :"interface"
const greetUser = (user) => {
    console.log(`hellew ${user.firstname} ${user.lastname}`);
};
const isUserLegal = (user) => {
    user.age > 18
        ? console.log(`${user.firstname} is legal `)
        : console.log(`${user.firstname} is illegal `);
};
const userOne = {
    firstname: "Hari",
    lastname: "Patel",
    age: 9897,
};
greetUser(userOne);
isUserLegal(userOne);
const printData = (data) => {
    console.log(data);
};
printData("string passed");
printData(45);
const newTeamLead = {
    name: "Shobhit",
    age: 45,
    onBoard: true,
};
console.log(newTeamLead);
