import { readFileSync, readdirSync, statSync, writeFileSync } from "fs";
import { resolve, join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IMAGES_DIR = "../public/product-images-all";
const OUTPUT_FILE = "../src/data/productImagesConfig.ts";

// Функция для определения главного изображения
function findMainImage(images) {
  // Приоритет выбора главного изображения
  const priorities = [
    (name) => name.startsWith("Product-1"),
    (name) => name.startsWith("model-1"),
    (name) => name.startsWith("1_"),
    (name) => name.startsWith("sku"),
    (name) => name.startsWith("SKU"),
    (name) => name.toLowerCase().includes("master"),
    (name) => /^1[\._]/.test(name), // имена начинающиеся с 1. или 1_
  ];

  for (const checkPriority of priorities) {
    const mainImage = images.find((img) => checkPriority(img));
    if (mainImage) return mainImage;
  }

  // Если не нашли по приоритетам, берем первое изображение
  return images[0];
}

// Функция для сортировки имен файлов
function sortImageNames(a, b) {
  // Извлекаем числа из имен файлов для правильной сортировки
  const getNumber = (str) => {
    const match = str.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };
  return getNumber(a) - getNumber(b);
}

async function generateConfig() {
  const config = {};

  // Получаем список всех папок
  const folders = readdirSync(resolve(__dirname, IMAGES_DIR))
    .filter((f) => statSync(join(__dirname, IMAGES_DIR, f)).isDirectory())
    .sort((a, b) => parseInt(a) - parseInt(b));

  for (const folder of folders) {
    const folderPath = join(__dirname, IMAGES_DIR, folder);
    const images = readdirSync(folderPath)
      .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .sort(sortImageNames);

    if (images.length > 0) {
      const mainImage = findMainImage(images);
      config[parseInt(folder)] = {
        images,
        mainImage,
      };
    }
  }

  // Генерируем TypeScript код
  const tsContent = `interface ProductImagesConfig {
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

  // Записываем результат в файл
  writeFileSync(resolve(__dirname, OUTPUT_FILE), tsContent);
  console.log("Config generated successfully!");
}

generateConfig().catch(console.error);
