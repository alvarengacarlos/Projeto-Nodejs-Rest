const repository = require("../repositories/pets");
const uploadFiles = require("../infra/files/uploadPhotos");

class Pet {
    
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
                        .then(result => resolve({photo: receivedData.name, result: result.affectedRows}));                                       
                }
            });        
        });        
    }
}

module.exports = new Pet();