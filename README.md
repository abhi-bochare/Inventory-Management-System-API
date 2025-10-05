# 🏷️ Inventory Management System API

A simple and clean **Inventory Management System API** built using **Node.js**, **Express**, and **MongoDB (Mongoose)**.  
This API allows you to perform full **CRUD operations** on products, manage stock quantities safely, and track products that are running low on inventory.

---

## 🚀 Project Overview

The goal of this project is to demonstrate backend design thinking, clean code, and robust business logic for a real-world scenario — **warehouse inventory tracking**.

### 🔧 Core Features
- **Product Management (CRUD)**: Create, Read, Update, Delete products.
- **Stock Management**:  
  - Increase stock quantity.  
  - Decrease stock quantity (with validation to prevent going below zero).  
- **Error Handling**:  
  - Returns proper HTTP status codes (400, 404, 500).  
- **Low Stock Tracking (Bonus)**:  
  - Retrieve all products below their defined `low_stock_threshold`.

---

## 🧱 Tech Stack

- **Backend Framework:** Express.js  
- **Database:** MongoDB (via Mongoose ODM)  
- **Language:** JavaScript (CommonJS)   

---

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/abhi-bochare/Inventory-Management-System-API.git
cd Inventory-Management-System-API
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create an .env file in the project root
- Your .env file should look like this:
```env
MONGO_URI=mongodb://127.0.0.1:27017/inventory_db
PORT=5000
```
- 📝 You can replace the MONGO_URI with your own MongoDB connection string if you’re using Atlas or Docker.


### 4. Start MongoDB
- Ensure MongoDB is running locally or remotely.
You can verify the connection using MongoDB Compass or CLI:
```bash
mongosh
```


### 5. Run the application
```bash
node server.js
```
- If everything works, you’ll see:
```arduino
MongoDB connected
Server running on port 5000
```
Your API is live at:
- 👉 http://localhost:5000/api/products

---

## 📬 API Endpoints

| Method | Endpoint                        | Description                          |
|--------|----------------------------------|--------------------------------------|
| **POST**   | `/api/products`                  | Create a new product                 |
| **GET**    | `/api/products`                  | Get all products                     |
| **GET**    | `/api/products/:id`              | Get a specific product by ID         |
| **PUT**    | `/api/products/:id`              | Update product details               |
| **DELETE** | `/api/products/:id`              | Delete a product                     |
| **POST**   | `/api/products/:id/increase`     | Increase stock                       |
| **POST**   | `/api/products/:id/decrease`     | Decrease stock (with validation)     |
| **GET**    | `/api/products/low-stock/list`   | List products below low-stock limit  |

---

## ⚖️ Assumptions & Design Choices

1. Stock quantity cannot be negative — handled by logic validation and Mongoose schema.

2. Low stock means stock_quantity < low_stock_threshold.

3. Default values:

    - stock_quantity: 0

    - low_stock_threshold: 5

4. Clean API design: Modular structure for scalability.

5. Error Handling: Consistent 400, 404, 500 responses with descriptive messages.

6. Environment Variables: All config values (DB URI, port) stored in .env to keep code environment-agnostic.

---

## 🧰 Project Structure
```
inventory-api/
├── server.js                # App entry point
├── .env                     # Environment variables (ignored in .gitignore)
├── models/
│   └── Product.js           # Mongoose schema
├── routes/
│   └── productRoutes.js     # Route definitions
├── controllers/
│   └── productController.js # Business logic
└── package.json
```

---

## 👨‍💻 Author

- Abhishek Bochare
- Full Stack Developer
- 📧 abhishekbochare2003@gmail.com

---
