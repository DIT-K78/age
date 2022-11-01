const calculateFullAge = require("../lib/age-calculator");

let ageFromString = calculateFullAge.getFullAge("1971-10-10");

// console.log(calculateFullAge.getFullAge("2021-08-27"), "2021-09-27");
console.log(calculateFullAge.getAgeStatus("1999-12-25"));
console.log(calculateFullAge.getFullAge("1999-12-25", "2022-10-31"));
console.log(calculateFullAge.getFullAge("1971-01-10").years);
// console.log(calculateFullAge.getFullAge("1971-12-10"));
