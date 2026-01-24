import fs from "fs";

let file = "/Volumes/My Shared Files/shared/thispc_host/node_jan_26/basic.js"
fs.readFile(file, function(err, data){
    if(!!err){
        console.log("Error", err)
    }
    if(!err){
        console.log("Data")
        console.log(data.toString())
    }
})

console.log("Bye Bye")