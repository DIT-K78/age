const calculateFullAge = require("../lib/age-calculator");

let ageFromString = calculateFullAge.getFullAge("1971-10-10");

// console.log(calculateFullAge.getFullAge("2021-08-27"), "2021-09-27");
console.log(calculateFullAge.getAgeStatus("1971-10-10"));
console.log(calculateFullAge.getFullAge("1971-09-10"));
console.log(calculateFullAge.getFullAge("1971-01-10").year);
// console.log(calculateFullAge.getFullAge("1971-12-10"));
