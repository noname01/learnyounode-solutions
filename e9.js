var http = require('http')
var s1 = '', s2 = '', s3 = '', count = 0;

function check(){
    if(count==3){
        console.log(s1)
        console.log(s2)
        console.log(s3)
    }
}

http.get(process.argv[2], function(res){
    res.on('data', function(data){
        s1+=data
    })
    res.on('end', function(){
        count++
        check()
    })
})

http.get(process.argv[3], function(res){
    res.on('data', function(data){
        s2+=data
    })
    res.on('end', function(){
        count++
        check()
    })
})

http.get(process.argv[4], function(res){
    res.on('data', function(data){
        s3+=data
    })
    res.on('end', function(){
        count++
        check()
    })
})
