import { ReturnDocument } from "mongodb";
import { number } from "zod";

const x: number = 33;
console.log(x);

const greet = (firstname: string) => {
  console.log(`hello ${firstname}`);
};

greet("Shobhit");

const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(sum(3, 4));

const isLeagal = (age: number): boolean => {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
};

console.log(isLeagal(70));

const childFunction = () => {
  console.log("hii ");
};

const main = (myfunction: () => void) => {
  setTimeout(myfunction, 3000);
};

console.log(main(childFunction));
