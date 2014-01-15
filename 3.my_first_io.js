var fs = require('fs');

var contents = fs.readFileSync(process.argv[2]);

var str = contents.toString();

var lines = str.split('\n').length - 1;
console.log(lines);