const fs = require("fs");

module.exports = (imagePathToRemoved, callbackRemovedImage) => {
    
    fs.rm(imagePathToRemoved, callbackRemovedImage);

};