var express = require('express');

var app = express.createServer(express.logger());

fs = require('fs');
mycontent = fs.readFileSync("index.html");
mytext = mycontent.toString('utf8');


app.get('/', function(request, response) {
//  response.send('Hello World 2!');
   response.send(mytext);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
