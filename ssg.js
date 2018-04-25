var http = require("http");
var fs = require("fs");

// The following is code for an npm package called create-html. As far as I can tell, fs has no way to generate HTML files by itself, so I am trying another method. In case this isn't what the project requires, I will hold off on installing the npm package.

var createHTML = require("create-html")
var htmlPage = createHTML({
	title: "Example Page",
	script: "example.js",
	scriptAsync: true,
	lang: "en",
	head: '<meta name="description" content="example">',
	body: '<h1>Title</h1>'
})

http.createServer(function (req, res) {

  fs.readFile('example.md', function(err, data) {
    if (err) {
    	console.log(err);
    };

    console.log(data.toString());
  });

  fs.writeFile('index.html', html, function(err) {
  	if (err) {
    	console.log(err);
    };
  })

}).listen(8080);

console.log("Now listening on local host 8080!")