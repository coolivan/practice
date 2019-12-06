var multiparty = require('multiparty');
var http = require('http');
var util = require('util');
 
http.createServer(function(req, res) {
    // parse a file upload
    var form = new multiparty.Form({
      uploadDir:'./upload'
    });
 
    form.parse(req, function(err, fields, files) {
      console.log(fields,files);

    });
 
}).listen(3000);