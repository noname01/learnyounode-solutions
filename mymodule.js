//  module for e6

var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback){
    fs.readdir(dir, function(err, data){
        if(!err){
            data = data.filter(function(name){
                return path.extname(name) === '.' + ext;
            });
            callback(null, data);
        }
        else callback(err);
    });
}
