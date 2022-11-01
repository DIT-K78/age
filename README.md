# This Package fork form full-age-calculator by akhilsky.

# README

This Package will help you to get exact age and minor or adulst status from Date of Birth to current Date or some other Date.

## Install

```bash
npm i -S
```

## Usage

### How to Get Full Age(Years,Months & Days)

##### Get full age on current Date

```bash
var calculateFullAge = require('full-age-calculator');

var getfullAge = calculateFullAge.getFullAge('birthDate'); // In yyyy-mm-dd format. example: 1998-12-25
console.log(getfullAge)
```

#### Output

```bash
{ "years":xx, "months":xx, "days":xx }
```

##### Get full age on some other Date

```bash

var getfullAge = calculateFullAge.getFullAge('birthDate','otherDate'); // In yyyy-mm-dd format. Example: 1999-12-25, 2022-10-31
console.log(getfullAge)
```

#### Output

```bash
{ "years": 22, "months": 10, "days": 6 }
```

### How to Get Full Age Status(Minor/Adult)

##### Get Age Status on current Date

```bash
var ageStatus = calculateFullAge.getAgeStatus('birthDate'); In yyyy-mm-dd format. Example: 1999-12-25
console.log(ageStatus);
```

#### Output

```bash
output: "Adult"
```

##### Get Age Status on some other Date

```bash
var ageStatus = calculateFullAge.getAgeStatus('birthDate','otherDate'); In yyyy-mm-dd format. example: 1998-12-25, 2022-10-31
```

#### Output

```bash
console.log(ageStatus);
output: "Adult"
```

## License

[MIT]()

[npm-url]: https://npmjs.org/package/full-age-calculator
