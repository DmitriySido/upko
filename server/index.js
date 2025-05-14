const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

// Endpoint для получения списка изображений продукта
app.get("/api/product-images/:index", (req, res) => {
  const productIndex = req.params.index;
  const imagesDir = path.join(
    __dirname,
    "../public/product-images-all",
    productIndex
  );

  try {
    const files = fs.readdirSync(imagesDir);
    res.json(files);
  } catch (error) {
    console.error("Error reading product images:", error);
    res.status(500).json({ error: "Failed to read product images" });
  }
});

// Serve static files
app.use(express.static(path.join(__dirname, "../public")));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
