const express = require('express')

const server = express()

server.get("/", (req, res)=>{
    res.write("My Page");
    res.end();
})

server.listen("7070", function(){
    console.log("running at localhost:7070")
})