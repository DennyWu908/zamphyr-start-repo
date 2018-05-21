var http = require("http");
var fs = require("fs");

// The following is code for an npm package called create-html. As far as I can tell, fs has no way to generate HTML files by itself, so I am looking for other methods to do so. Similarly, marked is an npm package for parsing Markdown text.

var createHTML = require("create-html")
var htmlPage = createHTML({
	title: "Example Page",
	script: ["example.js", "https://cdn.jsdelivr.net/npm/marked/marked.min.js"],
	// scriptAsync: true,
	lang: "en",
	// head: '<meta name="description" content="example">',
	body: '<h1>Title</h1>'
})

// Creating the server for the html page.

var server = http.createServer(function (req, res) {

  // index.html is the name of the file created by createHTML.

  fs.writeFile('index.html', html, function(err) {
    if (err) {
      console.log(err);
    };

    res.writeHead(200)

    // example.md is the Markdown file that the newly generated html file is supposed to be getting text from.

    fs.readFile('example.md', function(err, data) {
      if (err) {
        console.log(err);
      };

      res.end(data)
    });
  })

});

  // if (req.url === '/') {
    
  // };

server.listen(3000);

console.log("Now listening on http://localhost:3000!")