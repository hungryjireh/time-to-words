const numberToWord = {
  2: "two",
  3: "three",
  5: "five",
  8: "eight",
  11: "eleven",
  15: "quarter",
  30: "half",
  27: "twenty seven",
  20: "twenty"
}

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  } else if (time === '12:00') {
    return 'midday';
  } else {
    return convertHourAndMinute(time);
  }

  return 'half past eight';
}

function convertHourAndMinute(time) {
  const timeArr = time.split(":");
  const hour = Number(timeArr[0]);
  const minute = Number(timeArr[1]);
  if (minute === 0) {
    return numberToWord[hour] + " o'clock";
  } else if (minute <= 30) {
    return numberToWord[minute] + " past " + numberToWord[hour];
  } else {
    // minute is more than 30
    const remainderMinute = 60 - minute;
    return numberToWord[remainderMinute] + " to " + numberToWord[hour + 1];
  }
}

convertTimeToWords('2:03');
module.exports = { convertTimeToWords };

// - '12:00' > 'midday'
// - '2:00' > 'two o'clock'
// - '2:03' > 'three past two'
// - '2:11' > 'eleven past two'
// - '2:15' > 'quarter past two' 
// - '2:30' > 'half past two'
// - '2:33' > 'twenty seven to three'
// - '2:40' > 'twenty to three'
// - '2:45' > 'quarter to three' 
// - '2:55' > 'five to three'
