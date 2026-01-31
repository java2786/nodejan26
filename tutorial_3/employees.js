const fs = require('fs');

let date = new Date().toLocaleDateString();
let doj = date.split('').slice(0,10).join('')

// console.log(date);

const empData = [
    {'empId': '001','empname':'Nakul','doj':doj },
    {'empId': '002','empname':'Sahil','doj':doj },
    {'empId': '003','empname':'Gaurav','doj':doj },
    {'empId': '004','empname':'Mukesh','doj':doj },
    {'empId': '005','empname':'Neeraj','doj':doj }
]
console.log(JSON.stringify(empData));

module.export = JSON.stringify(empData);








