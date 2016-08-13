var moment = require('moment-timezone');
var start, end;

start = moment("2016-03-29 10:30:00 AM").tz('Australia/Sydney');
end = moment("2016-03-29 04:20:00 PM").tz('Australia/Sydney');

console.log(start.format());
console.log(end.format());

console.log(end.diff(start, 'hours', true));

start = moment("2016-03-29 10:00:00 AM").tz('Australia/Sydney');
end = moment("2016-03-29 03:20:00 PM").tz('Australia/Sydney');
console.log(end.diff(start, 'hours', true));