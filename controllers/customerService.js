const customerService = require("../models/customerService");

module.exports = app => {
  
    app.get("/customer-service", (req, res) => {
        customerService.list(res)
            .then(
                results => res.status(200).json(results)
        
            ).catch(
                error => res.status(400).json(error)
            );
    });

    app.get("/customer-service/:id", (req, res) => {
        
        const id = parseInt(req.params.id);

        customerService.searchById(id)
            .then(
                result => res.status(200).json(result[0])

            ).catch(
                error => res.status(400).json(error)
            );
    });

    app.post("/customer-service", (req, res) => {
        const receivedData = req.body;

        customerService.add(receivedData)
            .then(
                customerService => res.status(201).json(customerService)
            
            ).catch(
                error => res.status(400).json(error)
            );       
    });

    app.patch("/customer-service/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const receivedData = req.body;
        
        customerService.alter(id, receivedData)
            .then(
                result => res.status(200).json(result)

            ).catch(
                error => res.status(400).json(error)             
            );
    });
    
    app.delete("/customer-service/:id", (req, res) => {
        const id = parseInt(req.params.id);
        
        customerService.deleteById(id)
            .then(
                result => res.status(200).json(result)
            
            ).catch(
                error => res.status(400).json(error)
            );
    });

};