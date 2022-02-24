const fs =  require("fs");
console.log(process.argv);
const subcommand = process.argv[2];



switch(subcommand) {
    case "read":
        const index= Number(process.argv[3]);
fs.readFile("./pets.json", "utf8", (err, data)=> {
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
    break;
    case "update":
        console.log("updating file");
    break;
    case "destroy":
        console.log("destroying file");


console.error("usage: node pets.js [read | create | update | destroy]");
process.exit();
}