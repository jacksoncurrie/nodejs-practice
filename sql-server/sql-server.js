var http = require('http').createServer(handler);
var fs = require('fs');
var url = require('url');
var mysql = require('mysql');

http.listen(8080);

function handler(req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, (err, data) => {
    if(err){
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write("404 Not Found");
      return res.end();
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb"
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT 1", (err, result) => {
    if (err) throw err;
    console.log("Query complete");
  });
});