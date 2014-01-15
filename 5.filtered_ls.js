var fs = require('fs');
var path = require('path');
fs.readdir('/vagrant/nodeproject.js', function(err, list){
	var ext = process.argv[3];
	var results = [];
	for (i=0;i<list.length; i++){
		var extensionWithDot = "." + ext;
		if (extensionWithDot == path.extname(list[i])){
			results.push(list[i]);
		}
	}

	console.log(results);
});


