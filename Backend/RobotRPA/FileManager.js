const fs = require('fs');   
class FileManager{
    constructor(url){
        this.url = url;
    }
    escribirArchivo(url,json){
        
        const fs = require('fs');
        fs.readFile(url, function(err, contents) {
            let jsonmod = JSON.parse(contents);
            jsonmod.push(json);
            var jsonContent = JSON.stringify(jsonmod);
            fs.writeFile(url, jsonContent, function (err) {
                if (err) {
                    console.error(err);
                }
            });
        });
        
        console.log("bandera");
        console.log("JSON file has been saved.");
    }
}
module.exports = FileManager;