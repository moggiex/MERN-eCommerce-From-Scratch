// const express = require('express')

import dotenv from 'dotenv';
import connectDB from './config/db.js'
import express from 'express';
import colors from 'colors'
import products from './data/products.js';
import { notFound, errorHandler } from './middleware/error.js';

// Routes
import productRoutes from './routes/productRoutes.js'

// get env 
dotenv.config();

// Connect to db
connectDB();


// Express
const app = express();

app.get('/', (req, res) => {
    res.send('howdy')
})

// Route files
app.use('/api/products', productRoutes)

// Middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`NodeJS Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))