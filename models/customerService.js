const moment = require("moment");
const connection = require("../infra/connection");

class CustomerService {
    
    add(receivedData, res) {
        const sql = "INSERT INTO customerService SET ?";

        let serviceDate = moment().format("YYYY-MM-DD h:mm:ss");

        let schedulingDate = moment(receivedData.schedulingDate, "DD/MM/YYYY h:mm:ss")
            .format("YYYY-MM-DD h:mm:ss");

        // Validation
        const dateIsValid = moment().isSameOrAfter(schedulingDate);
        const clientIsValid = receivedData.client.length >= 5;

        const validation = [
            {
                name: "schedulingDate",
                valid: dateIsValid,
                menssage: "Campo schedulingDate não é uma data válida. Ex: Dia/Mês/Ano"
            },
            {
                name: "client",
                valid: clientIsValid,
                menssage: "Campo client deve ter mais de 4 caracteres"
            },
        ];
        
        const errors = validation.filter(element => element.valid == false);

        if (errors.length) {
            res.status(400).json(errors);
        
        } else {
            let customerService = {...receivedData, schedulingDate, serviceDate}

            connection.query(sql, customerService, (error, results) => {                        
        
                if (error) {
                    res.status(400).json(error);            
                } else {
                    res.status(201).json(results);
                }
            });
        }        
    }
}

module.exports = new CustomerService();