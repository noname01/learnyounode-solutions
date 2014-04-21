var net = require("net");
function fill0(n){
    if (n < 10) return "0" + n;
    return n.toString();
}
var server =  net.createServer(function(socket){
    var date = new Date();
    //date.getMonth() starts from 0!
    var s = date.getFullYear() + "-" + fill0(date.getMonth() + 1) + "-" + fill0(date.getDate()) + " "
            + fill0(date.getHours()) + ":" + fill0(date.getMinutes()) + "\n";
    socket.write(s);
    socket.end();
});
server.listen(+process.argv[2]);

