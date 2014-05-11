var http = require('http');
var str = ['', '', ''];
var count = 0;

[2, 3, 4].forEach(function(num){
    http.get(process.argv[num], function(res){
        res.setEncoding("utf8");
        res.on("data", function(data){
            str[num - 2] += data;
        });
        res.on("end", function(){
            count++;
            if(count == 3){
                [0, 1, 2].forEach(function(index){
                    console.log(str[index]);
                });
            }
        });
    });
});

