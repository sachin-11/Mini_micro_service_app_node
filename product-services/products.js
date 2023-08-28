// product-service/products.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3002;

mongoose.connect('your DB URI', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const Product = mongoose.model('Product', ProductSchema);

app.use(bodyParser.json());

app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post('/products', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.json(newProduct);
});

app.listen(PORT, () => {
  console.log(`Product microservice is running on port ${PORT}`);
});
