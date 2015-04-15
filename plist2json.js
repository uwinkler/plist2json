#!/usr/bin/env node

var program = require('commander');
var fs = require('fs');
var plist = require('plist');

program
    .version('0.0.1').
    parse(process.argv);

if (process.argv.length != 3) {
    program.outputHelp();
    process.exit(1);
}

var plistFile = process.argv[2];

console.error(plistFile);

fs.readFile(plistFile, 'utf8', function (err, content) {
    if ( err ) {
        console.error('Error: Could not read file ' + plistFile);
        process.exit(1);
    }

    console.log(content);

    var json = plist.parse(content);
    console.log(JSON.stringify(json, null, 2));
});









