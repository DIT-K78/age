exports.getFullAge = function (birthDate, targetDate) {
  targetDate = targetDate ? new Date(targetDate) : new Date();
  return calculateFullAge(birthDate, targetDate);
};

exports.getAgeStatus = function (birthDate, targetDate) {
  targetDate = targetDate ? new Date(targetDate) : new Date();
  var statusObj = calculateFullAge(birthDate, targetDate);
  switch (statusObj.years) {
    case statusObj.years < 2:
      return "Infant";
    case statusObj.years < 5:
      return "Toddler";
    case statusObj.years < 13:
      return "Child";
    case statusObj.years < 20:
      return "Teen";
    case statusObj.years < 40:
      return "Adult";
    case statusObj.years < 60:
      return "Middle Age Adult";
    default:
      return "Senior Adult";
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
  var monthAge = monthTarget >= monthDob ? monthTarget - monthDob : monthTarget - monthDob;
  var dateAge;
  if (dateTarget >= dateDob)
    dateAge = dateTarget - dateDob;
  else {
    monthAge--;
    dateAge = 31 + dateTarget - dateDob;
  }

  if (monthAge < 0) {
    monthAge = 12 + monthAge;
    yearAge--;
  }

  return { year: yearAge, month: monthAge, days: dateAge };
}
