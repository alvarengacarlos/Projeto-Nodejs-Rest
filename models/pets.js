const repository = require("../repositories/pets");
const uploadFiles = require("../infra/files/uploadPhotos");
const removePhotos = require("../infra/files/removePhotos");

class Pet {
    
    searchById(id) {
        return repository.searchById(id);
    }

    add(receivedData) {              

        return new Promise((resolve, reject) => {
            uploadFiles(receivedData.pathImage, receivedData.name, (error, pathToSaveImage) => {    
                if (error) {                
                    reject(error);

                } else {
                    const newPet = {
                        name: receivedData.name,
                        pathImage: pathToSaveImage
                    };
                    
                    repository.add(newPet)
                        .then(result => resolve({photo: receivedData.name, affectedRows: result.affectedRows}));                                       
                }
            });        
        });        
    }

    deleteById(id) {        

        return new Promise((resolve, reject) => {
            repository.searchById(id)
                .then(pet => {

                    removePhotos(pet[0].pathImage, (error) => {                    
                        if (error) {
                            reject(error);

                        } else {
                            repository.deleteById(id)
                                .then(result => resolve({id: id, affectedRows: result.affectedRows}));
                        }
                    });                

                }); 
        });       
    }
}

module.exports = new Pet();