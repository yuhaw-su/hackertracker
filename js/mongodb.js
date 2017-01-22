var http = require('http');
var url = require('url');
var fs = require('fs');
var address = 'mongodb://1:1@ds117109.mlab.com:17109/hackertracker';

var server = http.createServer(function(request, response) {
  response.writeHead(200, {'content-type': 'text/plain'});
  findContent(response);
});

var findContent = function(response) {
  var MongoClient = require('mongodb').MongoClient;
  var format = require('util').format;

  MongoClient.connect(address, function(err, db) {
    if (err) {
      throw err;
    }
    var results = null;
    var date = new Date();
    var todayString = date.yyyymmdd();
    var collection = db
      .collection('hackertracker')
      .find( { "end date": { $gte: todayString } })
      .toArray(function(err, docs) {
        console.dir(docs);
        results = JSON.stringify(docs);
        response.write(results+'\n');
        fs.writeFile('hackathons.json', results);
      });
  });
};

Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
        ].join('/');
};


server.listen(8000);
console.log('Server runing at http://localhost:8000');
