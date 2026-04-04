# 💰 Pocket Money
 
### A full-stack peer-to-peer digital wallet — built with the MERN stack
 
*Send money · Track transactions · Manage your balance*
---

## ✨ Features
 
### 🔐 Authentication & Security
- User Signup / Signin with **JWT tokens**
- Protected routes on both frontend and backend
- Password change from profile settings
 
### 💸 Money Transfer
- Send money to any registered user instantly
- **Atomic transactions** using MongoDB sessions — no partial transfers
- Balance validation before every transfer
- Prevents sending money to yourself
 
### 📊 Transaction History
- Complete log of all transactions with timestamps
- Filter by **All**, **Sent**, or **Received**
- Color-coded amounts (green = received, red = sent)
 
### 📷 QR Code Payments
- Every user gets a unique QR code
- Scan to pay — no searching required
- Camera integration in-browser
 
### 🔍 User Discovery
- Live search across all registered users
- Avatar initials auto-generated from names
 
### 💰 Account Management
- Real-time balance display
- Change password from profile
- Secure logout
 
---
 
## 🛠️ Tech Stack
 
| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18, React Router DOM, Tailwind CSS, Axios |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **Auth** | JSON Web Tokens (JWT) |
| **Validation** | Zod |
| **Build Tool** | Vite |
 
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

## 🗂️ How It Works
 
```
1. User signs up
       ↓
   Account created with random starting balance
       ↓
2. User signs in → receives JWT token
       ↓
3. Dashboard loads balance + user list
       ↓
4. User selects recipient → enters amount → confirms
       ↓
5. Atomic transfer: sender debited, receiver credited
       ↓
6. Transaction logged with timestamp
       ↓
7. History page shows full ledger, filterable

```


## 🔧 Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Samarth-2409X/Pocket_Money.git
cd  Pocket_Money
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

**Samarth**
GitHub: [Samarth-2409X](https://github.com/Samarth-2409X)
---

## ⭐ If you like this project

Give it a star ⭐ on GitHub and feel free to contribute!
