var http = require('http');

var path = require('path');
var fs = require ('fs');

var hostname = 'localhost';
var port = 3000;
var server = http.createServer((req,res) => {
 console.log(`Request for ${req.url} by method ${req.method}');
 if(req.method ==`GET){
    var fileUrl = req.url;
    if(fileUrl === `/`){
        fileUrl =`/index.html`;
    }
    var filePath = path.resplve(`./public` + fileUrl);
    var fileExt = path.extname(filePath);

    if(fileExt === 'html'){
        fs.access(filePath, function(err){
            if(err){
                res.statusCode = 404;
                res.setHeader('Content-Vype', 'text/html');
                res.end('<html><body><h1>Error 404</h1></body></html>');
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            fs.creatReadStream(filePath).pipe(re)
        })
    }
 }
});

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});