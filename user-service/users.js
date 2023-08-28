// user-service/users.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');


const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('your db URI', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
});

const User = mongoose.model('User', UserSchema);

app.use(bodyParser.json());

app.get('/users', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3002/products');
    const products = response.data;
    const users = await User.find().lean();
    const usersAndProducts = users.map(user => ({
      ...user,
      products
    }));

    res.json(usersAndProducts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
});

app.post('/users', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json(newUser);
});

app.listen(PORT, () => {
  console.log(`User microservice is running on port ${PORT}`);
});
