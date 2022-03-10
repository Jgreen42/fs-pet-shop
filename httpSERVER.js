const express = require("express");
const fs = require("fs");



const app = express();
app.use(express.json());

app.get("/pets", (req, res) => {
    fs.readFile("pets.json", "utf-8", (err, data) => {
    res.send("pets");
    });
});


app.post("/pets", (req, res) => {
    const newPet = {};
    newPet.age = req.body.age;
    newPet.kind = req.body.kind;
    newPet.name = req.body.name;
});

fs.readFile("pets.json", "utf-8", (err, data) => {
    const parsedData = JSON.parse(data);
    parsedData.push(newPet);
    fs.writeFile("pets.json", JSON.stringify(parsedData), (err) => {
        if (err) {
            res.status(500).send();

        } else {
            res.status(201).send(newPet);
        }
    })
})
app.patch("/pets/:index", (req, res) => {
    const {age, kind, name} = req.body;
});
app.listen(4000);
