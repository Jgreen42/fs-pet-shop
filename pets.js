const fs = require("fs");
const { argv } = require("process");
console.log(process.argv);
const subcommand = process.argv[2];



switch (subcommand) {
    case "read":
        const index = Number(process.argv[3]);
        fs.readFile("./pets.json", "utf8", (err, data) => {
            if (err) throw err;
 
            const parsedData = JSON.parse(data);
            const index = Number(process.argv[3]);
            if (process.argv[3] === undefined) {
                console.log(parsedData);
            } else if (index >= 0 && index < parsedData.length) {

                console.log(parsedData[index]);
            } else {
                console.error(`pet at index ${index} does not exist`)
                process.exit();
            }

        });
        break;
    case "create":
        console.log("creating");
        const age = Number(process.argv[3])
        const kind = process.argv[4]
        const name = process.argv[5]
        const newPet = {age, name, kind}
        console.log(newPet); 
        fs.readFile("./pets.json", "utf8", (err, data) => {
            const pets = JSON.parse(data);
            pets.push(newPet);
            fs.writeFile('./pets.json', JSON.stringify(pets), (err, data) => {
                
            })
            
        })    

        break;
    case "update":
        console.log("updating file");
        console.log("updating");
         age = Number(process.argv[3])
         kind = process.argv[1]
         name = process.argv[5]
         newPet = {age, name, kind}
        console.log(newPet); 
        fs.readFile("./pets.json", "utf8", (err, data) => {
            const pets = JSON.parse(data);
            pets.push(newPet);
            fs.writeFile('./pets.json', JSON.stringify(pets), (err, data) => {

                
            })
            
        })   

        break;
    case "destroy":
        console.log("destroying file");


        console.error("usage: node pets.js [read | create | update | destroy]");
        process.exit();
}