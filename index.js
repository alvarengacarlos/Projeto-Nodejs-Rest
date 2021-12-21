const customExpress = require("./config/customExpress");
const connection = require("./infra/connection");
const tables = require("./infra/tables");

connection.connect((error) => {
    if (error) {
        console.log(error);
    
    } else {
        console.log("Connected to the database");
        
        tables.init(connection);

        const app = customExpress();
        app.listen(3000, () => console.log("Server is running"));        
    }
});