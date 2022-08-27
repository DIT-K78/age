exports.getFullAge = function (birthDate, targetDate) {
  targetDate = targetDate ? new Date(targetDate) : new Date();
  return calculateFullAge(birthDate, targetDate);
};

exports.getAgeStatus = function (birthDate, targetDate) {
  targetDate = targetDate ? new Date(targetDate) : new Date();
  var statusObj = calculateFullAge(birthDate, targetDate);
  if ((statusObj.years === 18 && statusObj.months <= 0 && statusObj.days <= 0) || statusObj.years < 18) {
    return "Minor";
  } else {
    return "Adult";
  }
};

function calculateFullAge (bD, targetDate) {
  var birthDate = new Date(bD);
  var yearTarget = targetDate.getYear();
  var monthTarget = targetDate.getMonth();
  var dateTarget = targetDate.getDate();

  var yearDob = birthDate.getYear();
  var monthDob = birthDate.getMonth();
  var dateDob = birthDate.getDate();

  yearAge = yearTarget - yearDob;
  var monthAge = monthTarget >= monthDob ? monthTarget - monthDob : 12 + monthTarget - monthDob;
  var dateAge;
  if (dateTarget >= dateDob)
    dateAge = dateTarget - dateDob;
  else {
    monthAge--;
    dateAge = 31 + dateTarget - dateDob;
    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  return { year: yearAge, month: monthAge, days: dateAge };
}
