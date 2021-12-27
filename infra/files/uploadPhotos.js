const fs = module.require("fs");
const path = module.require("path");

module.exports = (pathImageReceived, fileName, callBackCreatedImage) => {

    const validTypes = ["png", "jpg", "jpeg"];  

    const extension = path.extname(pathImageReceived);    
    
    const validateTypes = validTypes.indexOf(extension.substring(1)) != -1;

    if (validateTypes) {
        const pathToSaveImage = `./assets/image/${fileName}${extension}`;

        fs.createReadStream(pathImageReceived)
            .pipe(fs.createWriteStream(pathToSaveImage))
            .on("finish", () => callBackCreatedImage(false, pathToSaveImage));
            
    } else {
        const errorMessage = "Erro. Tipo inválido";
        console.log(errorMessage);
        callBackCreatedImage(errorMessage);
    }    
};

