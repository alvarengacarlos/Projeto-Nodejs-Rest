const customerService = require("../models/customerService");

module.exports = app => {
  
    app.post("/customer-service", (req, res) => {
        const receivedData = req.body;

        customerService.add(receivedData, res);       
    });
    
};