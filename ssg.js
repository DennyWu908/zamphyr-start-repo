var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {

  fs.readFile('example.md', function(err, data) {
    if (err) {
    	console.log(err);
    };

    console.log(data.toString());
  });

}).listen(8080);

console.log("Now listening on local host 8080!")