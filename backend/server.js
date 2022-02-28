// const express = require('express')

import dotenv from 'dotenv';
import connectDB from './config/db.js'
import express from 'express';
import colors from 'colors'
import products from './data/products.js';
// const products = require('./data/products')

// get env 
dotenv.config();

// Connect to db
connectDB();


const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
    res.send('howdy')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {

    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

app.listen(PORT, console.log(`NodeJS Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))