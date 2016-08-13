"use strict";
var csv = require('csv'),
    parse = (csv).parse,
    fs = require('fs'),
    _ = require('underscore'),
    moment = require('moment-timezone');

var bag = {};
var parser = parse({delimiter: ','}, function(err, data){
   var newData =  _.flatten(data);

    for (var i = 0; i < newData.length; i++) {
        var x =  new moment(newData[i], 'YYYY-MM-DD HH:mm:ss').tz('Australia/Sydney');
        if ( ! bag[ x.format("YYYY-MM-DD HH:mm") ] ) {
            bag[ x.format("YYYY-MM-DD HH:mm") ] = 0;
        }
        bag[ x.format("YYYY-MM-DD HH:mm") ] ++;
    }

    console.log(JSON.stringify( bag, '\t', 4));
});
fs.createReadStream('/Users/philip.senger/Documents/Repo/DateCalculator/NumberOfHitsGrouped_where_offerid_is_null_HOUR_DAY.csv').pipe(parser);

// csv().from('/Users/philip.senger/Documents/Repo/DateCalculator/NumberOfHitsGrouped_where_offerid_is_null_HOUR_DAY.csv').on('data', console.log);