# 🛒 Simple E-commerce API

A beginner-friendly REST API for e-commerce applications built with Node.js, Express, MongoDB, and JWT authentication.

## 📋 Features

- ✅ User registration and login with JWT authentication
- ✅ Two user roles: **Customer** and **Admin**
- ✅ Product management (CRUD operations)
- ✅ Shopping cart functionality
- ✅ Order creation and management
- ✅ Admin can manage products and view all orders
- ✅ Customers can browse products, manage cart, and place orders

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd ecommerce-api
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment file**
Create a `.env` file in the root directory:
```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your-super-secret-jwt-key-here
NODE_ENV=development
```

4. **Start the server**
```bash
# Development mode
npm run dev

# Production mode
npm start
```

5. **Test the API**
Open your browser and go to: `http://localhost:4000/`

## 📁 Project Structure

```
ecommerce-api/
├── models/
│   ├── User.js          # User schema
│   ├── Product.js       # Product schema
│   ├── Cart.js          # Cart schema
│   └── Order.js         # Order schema
├── controllers/
│   ├── authController.js     # Authentication logic
│   ├── productController.js  # Product operations
│   ├── cartController.js     # Cart operations
│   └── orderController.js    # Order operations
├── routes/
│   ├── authRoutes.js         # Auth endpoints
│   ├── productRoutes.js      # Product endpoints
│   ├── cartRoutes.js         # Cart endpoints
│   └── orderRoutes.js        # Order endpoints
├── middleware/
│   └── auth.js               # JWT authentication
├── config/
│   └── database.js           # MongoDB connection
├── server.js                 # Main application file
├── package.json
└── .env                      # Environment variables
```

## 🔗 API Endpoints

### Authentication
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | User login | No |

### Products
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/products` | Get all products | No |
| GET | `/api/products/:id` | Get single product | No |
| POST | `/api/products` | Create product | Admin only |
| PUT | `/api/products/:id` | Update product | Admin only |
| DELETE | `/api/products/:id` | Delete product | Admin only |

### Cart
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/cart` | Get user's cart | Yes |
| POST | `/api/cart` | Add item to cart | Yes |
| PUT | `/api/cart` | Update cart item | Yes |
| DELETE | `/api/cart/:productId` | Remove item from cart | Yes |
| DELETE | `/api/cart` | Clear cart | Yes |

### Orders
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/orders` | Create order from cart | Yes |
| GET | `/api/orders` | Get user's orders | Yes |
| GET | `/api/orders/:id` | Get single order | Yes |
| GET | `/api/orders/admin/all` | Get all orders | Admin only |
| PUT | `/api/orders/:id/status` | Update order status | Admin only |

## 📝 API Usage Examples

### 1. Register a New User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "customer"
}
```

### 2. Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### 3. Create a Product (Admin Only)
```http
POST /api/products
Authorization: Bearer <your-jwt-token>
Content-Type: application/json

{
  "name": "iPhone 13",
  "description": "Latest iPhone model",
  "price": 999,
  "stock": 50,
  "category": "Electronics"
}
```

### 4. Add Item to Cart
```http
POST /api/cart
Authorization: Bearer <your-jwt-token>
Content-Type: application/json

{
  "productId": "product-id-here",
  "quantity": 2
}
```

### 5. Create Order
```http
POST /api/orders
Authorization: Bearer <your-jwt-token>
Content-Type: application/json
```

## 🛠️ Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 👥 User Roles

### Customer
- View all products
- Add products to cart
- Update cart items
- Remove items from cart
- Create orders
- View their own orders

### Admin
- All customer permissions
- Create new products
- Update existing products
- Delete products
- View all orders from all users
- Update order status

## 🔐 Authentication

This API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## 🐛 Common Issues & Solutions

### Port Already in Use
```bash
# Kill process on port 4000
npx kill-port 4000
```

### MongoDB Connection Error
- Make sure MongoDB is running locally
- Or use MongoDB Atlas cloud connection string
- Check your `MONGODB_URI` in `.env` file

### JWT Token Issues
- Make sure to include `Bearer ` before the token
- Check if the token is expired (default: 7 days)
- Verify the `JWT_SECRET` in `.env` file

## 📦 Package.json Scripts

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

## 🔧 Environment Variables

Create a `.env` file in your root directory:

```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your-super-secret-jwt-key-here
NODE_ENV=development
```

## 🚀 Deployment

### Local Development
```bash
npm run dev
```

### Production
```bash
npm start
```

## 📚 Testing the API

You can test the API using:
- **Postman** - Import the endpoints and test
- **curl** - Command line testing
- **Thunder Client** - VS Code extension
- **Insomnia** - API client

Example curl command:
```bash
# Test basic endpoint
curl http://localhost:4000/

# Register a user
curl -X POST http://localhost:4000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123"}'
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

If you have any questions or issues, please create an issue in this repository.

---

**Happy Coding! 🎉**