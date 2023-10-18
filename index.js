import {convertImage} from "./resize.js";
import * as fs from 'fs';
import path from 'path';

function readDirectory(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, paths) => {
            if (err) {
                reject(err)
            } else {
                resolve(paths)
            }
        });
    });
}

async function execute() {
    try {
        const allFiles = await readDirectory(path.resolve("images/origin"));
        allFiles.foreach(async (file) => {
            await convertImage(file)
        })

    } catch(err) {
       console.error("Erro ao redimensionar: " + err.toString());
    }
   
}

await execute();