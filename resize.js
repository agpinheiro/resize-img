import sharp from "sharp";
import sizeOf from "image-size";
import path from "path";
import config from "./config.js";

export async function convertImage(urlImage) {
  const url = path.resolve(`images/origin/${urlImage}`);
  const newPath = path.resolve(`images/destiny/${urlImage}`);
  const dimensions = sizeOf(url);

  
  const newWidth = Math.round(dimensions.width / config.resize);
  const newHeight = Math.round(dimensions.height / config.resize);

  const resize = config.square ? {w: newWidth, h:newWidth} : {w: newWidth, h:newHeight}

  console.log(resize.w, resize.h)
  sharp(url)
    .jpeg({ quality: config.quality })
    .resize(resize.w, resize.h)
    .toFile(newPath, (err, info) => {
      if (err) {
        console.error(
          "Ocorreu um erro ao redimensionar e copiar a imagem:",
          err
        );
      } else {
        console.log(`Imagem redimensionada e copiada para: ${newPath}`);
      }
    });
}
