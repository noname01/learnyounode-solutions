var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, data){
    if(!err){
        data.forEach(function(name){
            if(path.extname(name) === '.' + process.argv[3])
                console.log(name);
        });
    }
});