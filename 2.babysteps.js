
var finalResult = 0;

for (var i=2; i < process.argv.length; i++){
	finalResult += +process.argv[i];
}

console.log(finalResult); 