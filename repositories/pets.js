const query = require("../infra/database/queries");

class Pet {
    
    searchById(id) {
        const sql = `SELECT * FROM pets WHERE id = ?`;
        return query(sql, id);
    }

    add(newPet) {
        const sql = `INSERT INTO pets SET ?`;        
        return query(sql, newPet);
    }

    deleteById(id) {
        const sql = `DELETE FROM pets WHERE id = ?`;
        return query(sql, id);
    }
}

module.exports = new Pet();