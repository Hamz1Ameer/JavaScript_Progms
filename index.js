// ---- ---->Day1:

//  Question:longest word in a string

// // using for loop
// let str = "The quick brown fox jumped over the lazy dog";
// function longestWordInString() {
//   str = str.trim();
//   if (str.length === 0 || typeof str !== "string") {
//     return "invalid string";
//   }
//   let arr = str.split(" "),
//     max = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > max.length) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(longestWordInString(str));

// //using sort()
// let str = "The quick brown fox jumped  over the lazy  dog        ";
// function longestWordInString() {
//   str = str.trim();
//   if (str.length === 0 || typeof str !== "string") {
//     return "invalid string";
//   }
//   let val = str.split(" ").sort((a, b) => b.length - a.length)[0];
//   return val;
// }
// console.log(longestWordInString(str));

// // using Reduce Method:
// let str = "The quick brown fox jumped over the lazy  dog        ";
// function longestWordInString() {
//   str = str.trim();
//   if (str.length === 0 || typeof str !== "string") {
//     return "invalid string";
//   }
//   return str.split(" ").reduce((acc, ele) => {
//     return (acc = ele.length > acc.length ? ele : acc);
//   }, "");
// }
// console.log(longestWordInString(str));

//

//

//

// ---- ---->Day 2
// Generate a hashtag using input string
// hashtag should be generated with prefix as '#' and capitilise with each first letter of words capital after concatinated and spaces removed
let str = "comment for better reach";
const gererateHashtag = (str) => {
  return (
    "#" +
    str
      .split(" ")
      .map((ele) => {
        return ele.charAt(0).toUpperCase() + ele.slice(1);
      })
      .join("")
  );
};
console.log(gererateHashtag(str));
