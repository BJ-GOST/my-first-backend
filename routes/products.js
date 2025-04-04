const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

// POST, PUT, GET, DELETE -> HTTP METHODS -> Rest APIs to handle request

router.post('/', async (req, res)=>{

    try{

        const {name, price, category} = req.body
        const newProduct = new Product({name, price, category})
        await newProduct.save()
        res.status(201).json({message: "Product created successfully", newProduct})

    } catch (error){

        res.status(500).json({message: "Error adding product", error: error.message})
    
    }

})


router.get('/', async(req, res)=>{

    try{
        
        const products = await Product.find()
        res.status(200).json(products)

    } catch (error) {

        res.status(500).json({message: "Error fetching products", error:error.message})
    }

})


module.exports = router