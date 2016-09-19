#!/usr/bin/env node
/**
 * Created by psenger on 15/09/2016.
 */

var program = require('commander'),
    moment = require('moment');

program
    .option('-d, --date [string]', 'The the date DD/MM/YYY')
    .parse(process.argv);

if (program.date) {
    var x = ( '' + program.date ).split('/');
    var y = getAge( x[0], x[1], x[2] );
    console.log ( y + ' year(s) from today');
} else {
    program.help();
}

function getAge(dateOrDD, MM, YY, __StartMomentUsedForTestingOnly) {
    if (typeof dateOrDD === 'undefined' || dateOrDD === null) {
        return 0;
    }
    var birth = null;
    if (MM && YY) {
        /** By doing it this way, we can assume the TimeZone of the caller, because moment encapsulates date  **/
        var _yy = parseInt(YY, 10);
        var _mm = ( parseInt(MM, 10) ) - 1; /** Note: Months are zero indexed, so January is month 0. **/
        var _dd = parseInt(dateOrDD, 10);
        birth = moment().set('year', _yy).set('month', _mm).set('date', _dd );
    } else {
        birth = moment(dateOrDD);
    }
    /** Needs to be 0 hour, minute, second, and millisecond **/
    birth.set('hour', 0).set('minute', 0).set('second', 0).set('millisecond', 0);
    /* on the NEXT day. making it exclusive.  */

    /** by adding one day and zeroing out the hour, minute second, and millisecond values, we are executing a exclusive date **/
    var now = moment();
    if (__StartMomentUsedForTestingOnly) {
        now = moment(__StartMomentUsedForTestingOnly);
    }
    now.set('hour', 23).set('minute', 59).set('second', 59).set('millisecond', 999);
    return Math.abs( now.diff(birth, 'years') );
}
