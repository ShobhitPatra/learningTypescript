"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const x = 33;
console.log(x);
const greet = (firstname) => {
    console.log(`hello ${firstname}`);
};
greet("Shobhit");
const sum = (num1, num2) => {
    return num1 + num2;
};
console.log(sum(3, 4));
const isLeagal = (age) => {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isLeagal(70));
const childFunction = () => {
    console.log("hii ");
};
const main = (myfunction) => {
    setTimeout(myfunction, 3000);
};
console.log(main(childFunction));
