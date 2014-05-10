var mymodule = require('./mymodule');

mymodule(process.argv[2], process.argv[3], function(err, data){
    if(!err){
        data.forEach(function(name){
            console.log(name);
        });
    }
});
