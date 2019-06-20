// IMPORTS
const fs = require('fs-extra');
const directory = './temp';
const file = './temp/pubs.json';

// Vérifier la présence ou non d'un dossier temp à la racine du projet
// Si on en a => suppression du dossier
fs.pathExists(directory)
    .then(exists => {
        console.log(exists)
        if(exists){
            // suppression du dossier
            return fs.remove(directory)
                .then(() => {
                    console.log('success Remove !')
                })
                .catch(err => {
                    console.error(err)
                })             
        }
        return;
    })
    .then(()=>{
        return fs.ensureDir(directory)
            .then(() => {
                console.log('success Ensure dir !')
            })
            .catch(err => {
                console.error(err)
            });

    })
    .then(()=>{
        return fs.outputJson(file,[{"name":"Mystere"}]);
    })
    .then(()=>{
        return fs.watchFile(file, (curr,prev)=>{
            console.log('Fichier modifie !');
            console.log(`the current mtime is: ${curr.mtime}`);
            console.log(`the previous mtime was: ${prev.mtime}`);
        
    })    
            
});
    








