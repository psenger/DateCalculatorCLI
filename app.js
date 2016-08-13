var moment = require('moment-timezone');

var open    = moment("2016-05-09 11:59:59.999 PM").tz('Australia/Sydney');
var close   = moment("2016-05-30 12:00:00.000 PM").tz('Australia/Sydney');


console.log(open.format() );
console.log(close.format() );

var differenceInDays = close.diff(open, 'days');
var differenceInHours = close.diff(open, 'hours');

console.log('differenceInDays = ', differenceInDays);
console.log('differenceInHours = ', differenceInHours);


