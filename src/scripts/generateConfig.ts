import fs from "fs";
import path from "path";

const IMAGES_DIR = "../public/product-images-all";

interface ProductImagesConfig {
  [key: number]: {
    images: string[];
    mainImage: string;
  };
}

const config: ProductImagesConfig = {};

// Читаем все папки
const productDirs = fs
  .readdirSync(path.join(__dirname, IMAGES_DIR))
  .filter((dir) =>
    fs.statSync(path.join(__dirname, IMAGES_DIR, dir)).isDirectory()
  )
  .sort((a, b) => parseInt(a) - parseInt(b));

// Для каждой папки читаем файлы
productDirs.forEach((dir) => {
  const productIndex = parseInt(dir);
  const productPath = path.join(__dirname, IMAGES_DIR, dir);
  const files = fs
    .readdirSync(productPath)
    .filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return [".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(ext);
    })
    .sort();

  if (files.length > 0) {
    // Предпочитаем webp файлы для главного изображения, если они есть
    const mainImage = files.find((f) => f.endsWith(".webp")) || files[0];

    config[productIndex] = {
      images: files,
      mainImage,
    };
  }
});

// Записываем результат
const configContent = `interface ProductImagesConfig {
  [key: number]: {
    images: string[];
    mainImage: string; // главное изображение для превью в каталоге
  };
}

export const productImagesConfig: ProductImagesConfig = ${JSON.stringify(
  config,
  null,
  2
)};
`;

fs.writeFileSync(
  path.join(__dirname, "../data/productImagesConfig.ts"),
  configContent
);

console.log("Config generated successfully!");
