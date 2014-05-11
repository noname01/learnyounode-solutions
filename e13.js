var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
    var parsedUrl = url.parse(req.url, true);
    date = new Date(parsedUrl.query.iso);
    if(parsedUrl.pathname.toString() === '/api/parsetime'){
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify({ hour: date.getHours(),
            minute: date.getMinutes(), second: date.getSeconds() }));
    }
    else if(parsedUrl.pathname.toString() === '/api/unixtime'){
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify({ unixtime: date.getTime()}));
    }
    else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(+process.argv[2]);
