var fs = require("fs");
var http = require("http");

var server = http.createServer(function(request, response){
    response.writeHeader(200, {"content-type" : "text/plain"});
    fs.createReadStream(process.argv[3]).pipe(response);
});

server.listen(process.argv[2]);
