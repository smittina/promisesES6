// IMPORTS
const fs = require('fs-extra');
const directory = './temp';
const file = './temp/pubs.json';

// TRAITEMENT AU DEMARRAGE
async function treatment(){
    
    let directoryExists = await fs.pathExists(directory);
    if(directoryExists){
        let removeDir = await fs.remove();
    }
    let ensureDir = await fs.ensureDir(directory);
    let outPutJson = await fs.outputJSON(file, [{ "name": "Mystere" }]);
    let watchFile = await fs.watchFile(file, (curr, prev) => {
        console.log('Fichier modifie !');
        console.log(`the current mtime is: ${curr.mtime}`);
        console.log(`the previous mtime was: ${prev.mtime}`);

    }) 

    
}

// LANCEMENT DE LA FONCTION
treatment();
