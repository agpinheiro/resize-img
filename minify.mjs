import sharp from "sharp";

async function minifyPNG(urlImage) {
    try {
        sharp(`images/origin/${urlImage}`)
            .png({ quality: 80 })
            .toFile(`images/destiny/${urlImage}`);
    } catch (e) {
        console.error(`Error to minify ${urlImage}`);
    }
}

async function minifyJPEG(urlImage) {
    try {
        sharp(`images/origin/${urlImage}`)
            .jpeg({ quality: 80 })
            .toFile(`images/destiny/${urlImage}`);
    } catch (e) {
        console.error(`Error to minify ${urlImage}`);
    }
} 

export default async function handleStategyMinify(urlImage) {
    if (urlImage.endsWith('png')) {
        await minifyPNG(urlImage);
    }

    else if (urlImage.endsWith('jpeg')) {
        await minifyJPEG(urlImage);
    }

    else {
        //Mover para o destino sem comprimir
    }
}


