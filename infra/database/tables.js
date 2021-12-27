class Tables {
    
    init(connection) {        
        this.connection = connection;        
        this.createCustomerService();
        this.createPet();
    }

    createCustomerService() {
        const sql = `CREATE TABLE IF NOT EXISTS customerService (
            id INTEGER AUTO_INCREMENT PRIMARY KEY, client  VARCHAR(11) NOT NULL,
            pet VARCHAR(20) NOT NULL, service VARCHAR(20) NOT NULL, 
            status VARCHAR(20) NOT NULL, observation TEXT,
            schedulingDate DATETIME NOT NULL, serviceDate DATETIME NOT NULL
        )`;

        this.connection.query(sql, (error) => {
            if (error) {
                console.log(error);

            } else {
                console.log("Created tables");        
            }
        });
        
        
    }

    createPet() {
        const sql = `CREATE TABLE IF NOT EXISTS pets (
            id INTEGER AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50) NOT NULL,
            pathImage VARCHAR(200)
        )`;

        this.connection.query(sql, (error) => {
            if (error) {
                console.log(error);
            }else {
                console.log("Created tables");
            }
        });
    }

}

module.exports = new Tables();