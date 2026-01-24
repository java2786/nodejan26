const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



const items = [
    { "name": "Samosa", "price": 15, "quantity": 0, "total": 0 },
    { "name": "Pakora", "price": 40, "quantity": 0, "total": 0 }
]

async function updateItem(index) {
    const quantity = await askQuestion(`${items[index].name} quantity? `);
    items[index].quantity = parseInt(quantity, 10); // Convert to integer
    items[index].total = items[index].quantity * items[index].price;
}

function askQuestion(query) {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer);
        });
    });
}

async function updateItems() {
    for (let i = 0; i < items.length; i++) {
        await updateItem(i);
    }
    rl.close(); // Close the readline interface after all updates
}

updateItems().then(()=>{
    console.log(items)

let itemMenu = ""

for(let i=0;i<items.length;i++){
    str = `${i+1}. ${items[i]["name"]}\t\t- Rs ${items[i]["price"]}/-\n`
    itemMenu = itemMenu + str;
}
const fileContent = `
========Welcome to Sohan's Restaurant========
==================Our menu===================
${itemMenu}

${items[0]["name"]} Quantity: ${items[0]["quantity"]}
${items[1]["name"]} Quantity: ${items[1]["quantity"]}


===========Mohan's Bill=============
${items[0]["name"]}: ${items[0]["quantity"]}x Rs ${items[0]["price"]} = ${items[0]["total"]}
${items[1]["name"]}: ${items[1]["quantity"]}x Rs ${items[1]["price"]} = ${items[1]["total"]}
--------------------------------------------
Total bill: Rs ${items[0]["total"]+items[1]["total"]}`

fs.writeFile("bill_1.txt", fileContent, function (err, data) {
    if (!!err) {
        console.log("Written failed")
    } else {
        console.log("File created")
    }
});

console.log("Task is done");
})

