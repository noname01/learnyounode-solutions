var m = require('./mymodule')
m(process.argv[2].toString(), process.argv[3].toString(), function(err, data){
  if(!err){
    data.forEach(function(item){
	console.log(item);
    })
  }
)
