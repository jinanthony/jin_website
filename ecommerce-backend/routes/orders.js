const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Create a new order
router.post('/', async (req, res) => {
    const { user, products, total } = req.body;
    const order = new Order({ user, products, total });
    await order.save();
    res.status(201).json(order);
});

// Get orders for a user
router.get('/:userId', async (req, res) => {
    const orders = await Order.find({ user: req.params.userId }).populate('products.product');
    res.json(orders);
});

module.exports = router;
