const express = require('express');
const router = express.Router();
const {
  createOrder,
  getOrders,
  getOrder,
  getAllOrders,
  updateOrderStatus
} = require('../controllers/orderController');
const { auth, adminAuth } = require('../middleware/auth');

// All order routes require authentication
router.use(auth);

// POST /api/orders - Create order from cart
router.post('/', createOrder);

// GET /api/orders - Get user's orders
router.get('/', getOrders);

// GET /api/orders/:id - Get single order
router.get('/:id', getOrder);

// GET /api/orders/admin/all - Get all orders (Admin only)
router.get('/admin/all', adminAuth, getAllOrders);

// PUT /api/orders/:id/status - Update order status (Admin only)
router.put('/:id/status', adminAuth, updateOrderStatus);

module.exports = router;