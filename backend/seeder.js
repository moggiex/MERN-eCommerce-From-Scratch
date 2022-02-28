import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'

import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'

import connectDB from "./config/db.js"

dotenv.config()

connectDB()

const importData = async () => {
    try {
        // delete orders etc...
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users) // returns []
        const adminUser = createdUsers[0]._id;

        // Add admin user to all products
        const sampleProducts = products.map(product => {
            return {
                ...product, user: adminUser
            }
        })
        await Product.insertMany(sampleProducts)

        console.log('Data Imported'.green.inverse)

    } catch (error) {
        console.error(error.message.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        // delete orders etc...
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data Destoryed'.red.inverse)

    } catch (error) {
        console.error(error.message.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData();
}