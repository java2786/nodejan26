import fs from "fs";

let file = "/Volumes/My Shared Files/shared/thispc_host/node_jan_26/basic.js"
const data = fs.readFileSync(file)

console.log(data.toString())
console.log("Bye Bye")