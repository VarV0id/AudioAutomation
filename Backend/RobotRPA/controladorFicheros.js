class controladorFicheros{
    constructor(){
        var fs = require('fs');
        var obj = {
            table: []
        };

        obj.table.push({prueba: 1, texto:"hola"});

        var json = JSON.stringify(obj);

        fs.writeFile('Backend/RobotRPA/data/hola.json',json, 'utf8', function (err) {
            if (err) {
                console.error(err);
            }
        });
        fs.readFile('Backend/RobotRPA/data/hola.json','utf8', function readFileCallback(err,data){
            if (err) {
                console.error(err);
            }else{
                obj=JSON.parse(data);
                obj.table.push({prueba: 2, texto:"hola de nuevo"});
                json = JSON.stringify(obj);
                fs.writeFile('Backend/RobotRPA/data/hola.json',json, 'utf8', function (err){
                    if (err){
                        console.error(err);
                    }
                });
            }
        });
    }
}
module.exports = controladorFicheros;