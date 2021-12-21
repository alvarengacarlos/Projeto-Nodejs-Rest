const customerService = require("../models/customerService");

module.exports = app => {
  
    app.get("/customer-service", (req, res) => {
        customerService.list(res);
    });

    app.get("/customer-service/:id", (req, res) => {
        
        const id = parseInt(req.params.id);

        customerService.searchById(id, res);
    });

    app.post("/customer-service", (req, res) => {
        const receivedData = req.body;

        customerService.add(receivedData, res);       
    });

    app.patch("/customer-service/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const receivedData = req.body;
        
        customerService.alter(id, receivedData, res);
    });
    
};