import { exec } from 'child_process'

function cleanOriginDir() {
    console.log("-> Limpando a origem... ")
    exec("rm -f images/origin/*", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log("Limpo")
    });
}

function cleanDestinyDir() {
    console.log("-> Limpando o destino... ")
    exec("rm -f images/destiny/*", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log("Limpo!")
    });
}

cleanOriginDir()
cleanDestinyDir()