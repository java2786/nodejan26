const input = require("./userInput")
const fs = require('fs')
const filename = '/Volumes/My Shared Files/shared/thispc_host/node_jan_26/tutorial_3/data/attendance.csv'

function createEmployee(){
input("Enter your id: ", function (id) {
    input("Enter your name: ", function (name) {
        input("Enter your doj: ", function (date) {
            input("Enter your status: ", function (status) {
                let fileData = `${id},${name},${date},${status}\n`
                fs.appendFile(filename, fileData, function(err, done){
                    if(!!err){
                        console.log("Error .........")
                    } else {
                        console.log("Employee written")
                    }
                })
            })
        })
    })
})
}

module.exports = createEmployee