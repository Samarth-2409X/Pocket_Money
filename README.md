# 💰 Pocket Money App (Full Stack FinTech Project)

A full-stack digital wallet application that allows users to securely send money, track transactions, and manage their balance with a simple and intuitive interface.

---

## 🚀 Features

* 🔐 **Authentication & Authorization**

  * User Signup / Signin using JWT
  * Protected routes (frontend + backend)

* 💸 **Money Transfer System**

  * Send money to other users
  * Validation for insufficient balance
  * Atomic transactions using MongoDB sessions

* 📊 **Transaction History**

  * View all transactions
  * Filter by:

    * Sent
    * Received
    * All

* 🔍 **User Search**

  * Search users dynamically
  * Prevent sending money to yourself

* 💰 **Account Balance**

  * Real-time balance fetching

* 📷 **QR Code Payments**

  * Generate QR code for user
  * Scan QR to quickly send money

* ⚙️ **Profile Management**

  * Change password
  * Logout functionality

---

## 🛠️ Tech Stack

### Frontend:

* React.js
* React Router DOM
* Tailwind CSS
* Axios

### Backend:

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Zod (validation)

---

## 🧠 System Design Highlights

* ✅ **Atomic Transactions**

  * Used MongoDB sessions to ensure safe money transfer
  * Prevents inconsistent balance updates

* 🔐 **Secure Authentication**

  * Token-based authentication using JWT
  * Middleware to protect private routes

* 📦 **Modular Architecture**

  * Separate routes for user and account
  * Clean component structure in frontend

---

## ⚙️ How It Works

1. User signs up and gets an account with initial balance
2. User logs in and receives a JWT token
3. Dashboard shows balance and available users
4. User can send money to others
5. Transactions are stored and displayed in history
6. QR code enables quick peer-to-peer payments


---

## 🔧 Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/pocket-money-app.git
cd pocket-money-app
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECREATE=your_secret_key
```

Run backend:

```bash
node index.js
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints

### User Routes

* `POST /api/v1/user/signup`
* `POST /api/v1/user/signin`
* `GET /api/v1/user/me`
* `PUT /api/v1/user/changepassword`
* `GET /api/v1/user/bulk`

### Account Routes

* `GET /api/v1/account/balance`
* `POST /api/v1/account/transfer`
* `GET /api/v1/account/transactions`

---

## 🚀 Future Improvements

* 🔔 Notifications system
* 💳 Payment gateway integration
* 📱 Mobile responsiveness improvements
* 🌍 Deployment (Vercel + Render)
* 🔒 Password hashing (bcrypt)

---

## ⚠️ Known Limitations

* Passwords are stored in plain text (can be improved using bcrypt)
* No email verification
* No rate limiting

---

## 🙌 Acknowledgement

This project was initially inspired by learning resources from Harkirat Singh.

The project has been significantly extended and customized with additional features such as:

* QR Code payments
* Transaction history filtering
* Improved UI/UX
* Full-stack integration and enhancements

---

## 👨‍💻 Author

**Samarth Shirahatti**

---

## ⭐ If you like this project

Give it a star ⭐ on GitHub and feel free to contribute!
