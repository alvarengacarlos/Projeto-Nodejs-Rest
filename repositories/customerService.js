const query = require("../infra/database/queries");

class CustomerService {
    
    add(customerService) {
        const sql = "INSERT INTO customerService SET ?";
        return query(sql, customerService);
    }

    list() {
        const sql = `SELECT * FROM customerService`;
        return query(sql);
    }

    searchById(id) {
        const sql = `SELECT * FROM customerService WHERE id = ?`;
        return query(sql, id);
    }

    alter(id, receivedDate) {
        const sql = `UPDATE customerService SET ? WHERE id = ?`;
        return query(sql, [receivedDate, id]);
    }

    delete(id) {
        const sql = `DELETE FROM customerService WHERE id = ?`;
        
        return query(sql, id);
    }
}

module.exports = new CustomerService();