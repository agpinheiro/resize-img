import sharp from "sharp";
import sizeOf from "image-size";
import path from "path";
import { options } from "./config";

export async function convertImage(urlImage) {
  const url = path.resolve(`images/origin/${urlImage}`);
  const newPath = path.resolve(`images/destiny/${urlImage}`);
  const dimensions = sizeOf(url);

  
  const newWidth = Math.round(dimensions.width / options.resize);
  const newHeight = Math.round(dimensions.height / options.resize);
  sharp(url)
    .jpeg({ quality: options.quality })
    .resize(newWidth, newHeight)
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
