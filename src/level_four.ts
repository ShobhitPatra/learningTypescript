//Generics

const firstElem = <T>(arg: T[]) => {
  return arg[0];
};

console.log(firstElem<number>([1, 2, 3, 4, 5, 6]));
const ans = firstElem<string>(["one", "two", "nine"]);
console.log(ans.toUpperCase());
