var sys = require("sys"),  
my_http = require("http"),
path = require("path"),  
url = require("url"),
filesys = require("fs");
my_http.createServer(function(request,response){  
    var my_path = url.parse(request.url).pathname;
    var project_path = process.cwd();
    var results_file_path = '/src/test/report/UpdatingBasket.json';
    var full_path = '';
    var java_path = path.join(project_path,"/src/main/java");
    switch(my_path){
        case '/index.html':
            sys.puts("Request registered");
            sys.puts(path.join(java_path,"/index.html"));
            full_path = path.join(project_path,"/src/main/java/index.html");
            response.writeHead(200, { 'Content-Type': 'text/html' });
        break;
        case '/getResultJson':
            sys.puts("Request registered for json");
            full_path = path.join(project_path,results_file_path);
            sys.puts(full_path);
        break;
        case '/js/app.js':
            full_path = path.join(java_path,"/js/app.js");
        break;
        case '/js/controllers/maincontroller.js':
            full_path = path.join(java_path,"/js/controllers/maincontroller.js");
        break;
    }
    filesys.readFile(full_path,"utf8",function(err,data){
	    response.write(data+'',"utf8");
	    response.end();
    });
}).listen(8080);
sys.puts("Server Running on 8080"); 
