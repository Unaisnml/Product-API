const express = require('express');
const {createProduct, deleteProduct, fetchProduct, filterProducts} = require('../controller/productController')
const router = express.Router()

router.post('/api/product/create',createProduct);
router.delete('/api/product/:productId', deleteProduct);
router.get('/api/product/:productId', fetchProduct)
router.get('/api/product',filterProducts)
module.exports = router;