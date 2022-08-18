var http = require('http')
var express = require('express')
var app = express()
var port = 3000;
app.get('/', (req, res) => {
    res.end("Hello, This is my first node project, running on Port : " + port + "  Environment : " + process.env.NODE_ENV );
})

app.listen(port, () => {
    console.log("The server is running on port : " + port)
})