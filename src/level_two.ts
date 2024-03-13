//INTERFACES : problem statement - how would you pass an object as an argument to a function --best way :"interface"

interface User {
  firstname: string;
  lastname: string;
  age: number;
  email?: string; //optional .. can be ignored
}
const greetUser = (user: User) => {
  console.log(`hellew ${user.firstname} ${user.lastname}`);
};

const isUserLegal = (user: User) => {
  user.age > 18
    ? console.log(`${user.firstname} is legal `)
    : console.log(`${user.firstname} is illegal `);
};

const userOne: User = {
  firstname: "Hari",
  lastname: "Patel",
  age: 9897,
};

greetUser(userOne);
isUserLegal(userOne);

//TYPE : simialar to interface ..main differernce : interface can be implemented by other class

//syntax:

type typedUser = {
  firstname: "string";
  lastname: "string";
  age: number;
};

//other advantages :

//1.Union

type customType = number | string;

const printData = (data: customType) => {
  console.log(data);
};

printData("string passed");
printData(45);

//INTERSECTION

type employee = {
  name: string;
  age?: number;
  department?: string;
};

type manager = {
  name: string;
  onBoard: boolean;
};

type teamLead = employee & manager;

const newTeamLead: teamLead = {
  name: "Shobhit",
  age: 45,
  onBoard: true,
};
console.log(newTeamLead);
