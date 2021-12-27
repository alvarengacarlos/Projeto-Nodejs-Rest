const pet = require("../models/pets");

module.exports = (app) => {
    app.post("/pet", (req, res) => {
        
        const petObject = req.body;
        
        pet.add(petObject)
            .then(result => res.status(201).json(result))
            .catch(error => res.status(400).json({error: error}));
        
    });
};