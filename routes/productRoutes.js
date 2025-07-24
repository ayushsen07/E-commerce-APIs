const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');
const { auth, adminAuth } = require('../middleware/auth');

// GET /api/products - Get all products
router.get('/', getProducts);

// GET /api/products/:id - Get single product
router.get('/:id', getProduct);

// POST /api/products - Create product (Admin only)
router.post('/', auth, adminAuth, createProduct);

// PUT /api/products/:id - Update product (Admin only)
router.put('/:id', auth, adminAuth, updateProduct);

// DELETE /api/products/:id - Delete product (Admin only)
router.delete('/:id', auth, adminAuth, deleteProduct);

module.exports = router;
