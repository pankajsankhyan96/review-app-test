var http = require('http')
var express = require('express')
var app = express()
require('../config');
var port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.end("Hello, This is my first node project, running on Port : " + port + "  Environment : " + process.env.NODE_ENV + " dbhost: " + process.env.DB_HOST );
})

app.listen(port, () => {
    console.log("The server is running on port : " + port)
})