// for (let i = 0; i <= 10; i++) {
//   console.log(`count number ${i}`);
// }

//const numArr = ["one", "two", "three", "four", "five"];

// for (let i = 0; i < numArr.length; i++) {
//   console.log(`ยกน้ำหนัก ครั้งที่ ${numArr[i]}`);
// }

// let count = 0;
// while (count < numArr.length) {
//   console.log(`count #${numArr[count]}`);
//   count++;
// }

// numArr.forEach(function (num) {
//   console.log(`Show num ${num}`);
// });

// numArr.forEach((num) => console.log("num => ${num}"));

// numArr.forEach((v, i, a) => console.log(`${v} , ${a} , ${i}`));

// const person = {
//   name: "James",
//   age: 28,
//   gender: "male",
// };

// for (const key in person) {
//   console.log(`${key} => ${person[key]}`);
// }

// for (const num of numArr) {
//   console.log(num);
// }

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sumFor = 0;
// let sumForEach = 0;
// let sumForIn = 0;
// let sumForOf = 0;

// for (let i = 0; i < numArr.length; i++) {
//   numArr[i] % 3 === 0 ? (sumFor += numArr[i]) : null;
// }

// numArr.forEach((num) => (num % 3 === 0 ? (sumForEach += num) : null));

// for (const i in numArr) {
//   numArr[i] % 3 === 0 ? (sumForIn += numArr[i]) : null;
// }

// for (const num of numArr) {
//   num % 3 === 0 ? (sumForOf += num) : null;
// }

// console.log(
//   `sumFor: ${sumFor}, \nsumForEach: ${sumForEach}, \nsumForIn: ${sumForIn}, \nsumForIn: ${sumForOf}`
// );

// const sqrNumbers = [];

// for (let i = 0; i < sqrNumbers.length; i++) {
//     sqrNumbers.push(numArr[i]  * numArr[i]);
// }

const sqrNumbers = numArr.map((num) => {
  return num * num;
});

// console.log(sqrNumbers);

const sumArr = numArr.reduce((total, num) => total + num, 0);

console.log(sqrNumbers.reduce((total, num) => total + num, 0));

const rndNumbers = [1, 2, 4, 9, 5, 6, 3, 8, 7];
const sortedNum = rndNumbers.sort((a, b) => a - b);

console.log(sortedNum);

const evenNumber = sortedNum.filter((num) => num % 2 === 0);

console.log(evenNumber);
