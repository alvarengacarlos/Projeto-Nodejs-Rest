const query = require("../infra/database/queries");

class Pet {
    
    add(newPet) {
        const sql = `INSERT INTO pets SET ?`;        
        return query(sql, newPet);
    }
}

module.exports = new Pet();