const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('./models/Product');

const sampleProducts = [
  {
    name: 'Fresh Organic Apples',
    price: 3.99,
    description: 'Crisp and fresh red apples.',
    category: 'Fruits',
    inStock: true
  },
  {
    name: 'Whole Wheat Bread',
    price: 2.49,
    description: 'Freshly baked whole wheat loaf.',
    category: 'Bakery',
    inStock: true
  },
  {
    name: 'Almond Milk 1L',
    price: 4.19,
    description: 'Unsweetened plant-based milk.',
    category: 'Dairy & Alternatives',
    inStock: true
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);
    console.log('Database Seeded Successfully!');
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();