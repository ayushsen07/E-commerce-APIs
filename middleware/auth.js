const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

// Verify JWT token
const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
    // console.log('Token received:', token);
    
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    // Remove 'Bearer ' from token
    const cleanToken = token.replace('Bearer ', '');
    
    const decoded = jwt.verify(cleanToken, process.env.JWT_SECRET || 'your-secret-key');
    const user = await User.findById(decoded.userId);
    
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    
    req.user = user;
    // console.log('User authenticated:', user);
    
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Check if user is admin
const adminAuth = (req, res, next) => {
  // console.log('Checking admin privileges for user:', req.user);
  
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin access required' });
  }
  next();
};

module.exports = { auth, adminAuth };
