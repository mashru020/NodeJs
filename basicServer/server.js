// A BASIC Node server

const http = require('http'); //node package called http, built in library


// create server
const server = http.createServer(function(req, res) {
    // req (object)- request, res (object) - response

    // response - test for downloading some data (clint side api test)
    res.setHeader('Content-type', 'application/json') //key and value
    res.setHeader('Access-Control-Allow-Origin', "*") // request allow to come any domain, any browser
    res.writeHead(200); //status code HTTP 200 / OK

    let dataObj = {"id":123, "name":"mashru", "email":"mashrurrahman16@gmail.com"};
    let data = JSON.stringify(dataObj);
    res.end(data);

})

// port number 1234 - surver to be listening on
// callback function - do something when listen command has started
server.listen(1234, function() {
    console.log('Lintning on port 1234');
})