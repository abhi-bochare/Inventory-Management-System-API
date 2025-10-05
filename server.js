const express = require("express");
const connectToDB = require("./config/db");
require("dotenv").config();
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(express.json());

connectToDB();

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
