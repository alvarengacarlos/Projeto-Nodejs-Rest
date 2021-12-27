const moment = require("moment");
const axios = require("axios");
const repositories = require("../repositories/customerService");

class CustomerService {

    constructor() {
        this.serviceDate = moment().format("YYYY-MM-DD h:mm:ss");      
    }
       
    add(receivedData) {           

        //Converts date type for american type
        let schedulingDate = moment(receivedData.schedulingDate, "DD/MM/YYYY h:mm:ss")
            .format("YYYY-MM-DD h:mm:ss");

        //Validations
        const responses = [];
        responses.push(this.validateCpf(receivedData.client));
        responses.push(this.validateSchedulingDate(schedulingDate));
        
        const errors = responses.filter(element => element.valid == false);

        if (errors.length) {
            return new Promise((resolve, reject) => {reject(errors)});            
        
        } else {            
            let customerService = {...receivedData, schedulingDate, serviceDate: this.serviceDate}

            return repositories.add(customerService)
                .then(result => {
                    
                    const id = result.id;                    
                    return {...customerService, id}

                });
        }        
    }

    validateSchedulingDate(schedulingDate) {        
        let result = !moment(this.serviceDate).isSameOrAfter(schedulingDate);
  
        return {
                name: "validateSchedulingDate",
                valid: result,
                menssage: "Campo schedulingDate não é uma data válida. Ex: Dia/Mês/Ano"
            };                    
    }

    validateCpf(cpf) {        
        let result = (cpf.length >= 11);        
        return {
                    name: "validateClient",
                    valid: result,
                    menssage: "Campo client deve ter 11 caracteres pois é um cpf"
                };                        
    }

    queryClient(cpf) {
        
        const query = async (cpf) => {            
            return await axios.get(`http://localhost:8082/${cpf}`);                                            
        }

        return query(cpf);
    }

    list() {       
        return repositories.list();        
    }

    searchById(id) {        
        
        return repositories.searchById(id);        
    }

    alter(id, receivedData) {
        
        if (receivedData.schedulingDate) {
            receivedData.schedulingDate = moment(receivedData.schedulingDate, "DD/MM/YYYY h:mm:ss")
                .format("YYYY-MM-DD h:mm:ss");        
        }
        
        return repositories.alter(id, receivedData)
            .then(() => receivedData)            
    }

    deleteById(id) {

        return repositories.delete(id)
            .then(result => {
                return {id: id, affectedRows: result.affectedRows}
            });          
    }
}

module.exports = new CustomerService();