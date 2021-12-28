const pet = require("../models/pets");

module.exports = (app) => {

    app.get("/pet/:id", (req, res) => {
        const id = req.params.id;        
        pet.searchById(id)
            .then(result => res.status(200).json(result[0]))
            .catch(error => res.status(400).json(error));        
    });

    app.post("/pet", (req, res) => {
        
        const petObject = req.body;
        
        pet.add(petObject)
            .then(result => res.status(201).json(result))
            .catch(error => res.status(400).json({error: error}));
        
    });

    app.delete("/pet/:id", (req, res) => {
        const id = req.params.id;
        
        pet.deleteById(id)
            .then(result => res.status(200).json(result))
            .catch(error => res.status(400).json(error));       
    });
};