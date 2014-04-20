var fs = require('fs')
var path = require('path')
function scan(dir, ext, callback){
	var ans = []
	fs.readdir(dir, function(err, data){
		if(!err){
			data.forEach(function(name){
				if(path.extname(name.toString()) === '.' + ext)
					ans.push(name.toString())
			})
			callback(null, ans);
		}
		else callback(err);
	})
}
module.exports=scan
