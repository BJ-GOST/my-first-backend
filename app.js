const express = require('express')
const connectDB = require('./config/db')
const app = express()
const port = 3000

connectDB()

app.use(express.json())

const productsRoute = require('./routes/products')

app.use('/products', productsRoute)

app.listen(port, () =>{
    console.log(`server running on port ${port}`)
})


