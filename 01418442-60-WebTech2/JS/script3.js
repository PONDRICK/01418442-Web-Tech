const data = [
  { id: 1, value: 10 },
  { id: 2, value: 5 },
  { id: 3, value: 9 },
  { id: 4, value: 12 },
  { id: 5, value: 6 },
];

const arr = data.map((item) => item.value);
console.log(arr);
const mod3 = arr.filter((value) => value % 3 === 0);
console.log(mod3);
const sumMod3 = mod3.reduce((acc, cur) => acc + cur, 0);
console.log(sumMod3);

const result = data
  .map((item) => item.value)
  .filter((value) => value % 3 === 0)
  .reduce((acc, cur) => acc + cur);

console.log(`result => ${result}`);
