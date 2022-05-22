# Petshop App
API desenvolvida no curso da Alura. 

# End Points

### Costumer Service

| URL | Http Verb | Parameters | Body Json |
| :--- | :--- | :--- | :--- |
| /customer-service | GET | empty | empty |
| /customer-service/id | GET | :id | empty |
| /customer-service | POST | empty | yes |
| /customer-service/id | PATCH | :id | yes |
| /customer-service/id | DELETE | :id | empty |

### Body Json Example
```json
{    
    "client": "00000000000", //CPF
	"pet": "Pet Name",
	"service": "Service Name",	
	"status": "Service Status",
	"observation": "About the Pet",
	"schedulingDate": "DD/MM/YYYY HH:MM:SS"
}
```

### Pet 

| URL | Http Verb | Parameters | Body Json |
| :--- | :--- | :--- | :--- |
| /pet/id | GET | :id | empty |
| /pet | POST | empty | yes |
| /pet/id | DELETE | :id | empty |

### Body Json Example
```json
{
    "name": "Pet Name",
	"pathImage": "Image Path To Upload"
}
```

# Direitos de imagens
- [Toby.jpg](https://pixabay.com/pt/users/vizslafotozas-9868721/)

- [Sakura.jpg](https://pixabay.com/pt/users/ty_swartz-617282/)

# Configuração do banco de dados
The "/infra/database/connection.example.js" file is where the database information should be placed. This file must be renamed to "/infra/database/connection.js"

Supported Database: [Mysql](https://www.mysql.com/) and [MariaDB](https://mariadb.org/).
