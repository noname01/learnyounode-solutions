var net = require('net');

function fill0(num){
    if(num < 10) return '0' + num;
    return num;
}

var server = net.createServer(function(socket){
    var date = new Date();
    var response = date.getFullYear() + '-' + fill0(date.getMonth() + 1) + '-' + fill0(date.getDate())
        + " " + fill0(date.getHours()) + ":" + fill0(date.getMinutes()) + "\n";
    socket.end(response);
});

server.listen(+process.argv[2]);
