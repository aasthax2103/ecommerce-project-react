# 🛒 Full-Stack E-Commerce Web Application

## 📌 Project Overview

This is a production-grade full-stack e-commerce web application built using **React (Frontend)** and **Node.js + Express (Backend)** with RESTful API architecture.

The project simulates a real-world online shopping experience including product search, cart management, checkout workflow, delivery selection, order creation, and order tracking.

The backend structure was adapted from SuperSimpleDev for educational purposes and extended with custom frontend integration, state management logic, and cloud deployment configuration.

🌐 **Live Deployment:**  

http://ecommerce-project-react-env.eba-jg9igevb.ap-southeast-2.elasticbeanstalk.com/checkout

---

## 🏗 Real-World Architecture (Production-Oriented Setup)

To simulate a real-world scalable application:

- The application is deployed on **AWS Elastic Beanstalk**
- Configured as a **Load Balanced Environment**
- Auto Scaling configuration enabled
- Backend server runs in a managed EC2 environment
- Database is configured separately to mimic production separation of concerns
- Static frontend build served via Express in production

This setup mirrors industry-level deployment practices rather than a simple single-instance demo deployment.

---

## 🎯 Technical Evaluation

This project demonstrates:

- Strong understanding of full-stack architecture
- RESTful API integration
- Clean component-driven frontend structure
- Proper separation of concerns (Frontend vs Backend)
- Cloud deployment & environment configuration
- Load balancing concepts
- State management using React Hooks
- URL query parameter-based search
- Dynamic cart lifecycle handling
- Real-time payment summary updates
- Order tracking logic with time-based progress calculation
- Async/await API handling
- SSH-based Git workflow with multi-account configuration

---

## 🏗 Tech Stack

### Frontend
- React
- React Router
- Axios
- Day.js
- CSS Modules
- Vite

### Backend
- Node.js
- Express.js
- SQLite
- RESTful API Design

### Cloud & DevOps
- AWS Elastic Beanstalk
- Load Balanced Environment
- Auto Scaling Configuration
- Production Build via Vite
- Git (SSH configuration)

---

## 🚀 Core Features

### 🛍 Product Management
- Dynamic product listing
- URL-based search filtering
- Quantity selection
- Add-to-cart with visual confirmation feedback

### 🛒 Cart & Checkout
- Inline quantity editing
- Delivery option selection
- Shipping cost recalculation
- Real-time payment summary update
- Delete functionality
- Controlled component form handling

### 📦 Orders
- Order creation
- Order history page
- Buy Again functionality
- Package tracking with dynamic progress bar

### 🔎 Search
- Query parameter-based filtering (`/?search=keyword`)
- Backend-integrated search logic

---

## 📂 Project Structure

```
e-commerce-website/
│
├── ecommerce-frontend/
│   ├── src/
│   ├── pages/
│   ├── components/
│   └── vite.config.js
│
├── ecommerce-backend/
│   ├── server.js
│   ├── routes/
│   ├── database.sqlite
│   └── package.json
│
└── README.md
```

---

## 🧪 How To Run Locally

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/ecommerce-project-react.git
cd ecommerce-project-react
```

---

### 2️⃣ Start Backend

```bash
cd ecommerce-backend
npm install
npm run dev
```

Backend runs at:

```
http://localhost:3000
```

---

### 3️⃣ Start Frontend (New Terminal)

```bash
cd ecommerce-frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## ☁ Deployment Process (AWS)

1. Built frontend using:
   ```
   npm run build
   ```
2. Moved `dist` folder into backend
3. Configured Express to serve static files
4. Packaged backend + build files
5. Uploaded via AWS Elastic Beanstalk
6. Configured load balanced environment
7. Verified health and scaling configuration

---

## 🔐 Engineering Considerations

- Environment-based configuration
- Clean API abstraction
- Scalable deployment model
- Separation of frontend & backend concerns
- Async error handling
- Production-ready folder structure

---

## 📈 Future Improvements

- JWT Authentication
- Role-based access
- Payment Gateway Integration
- Admin Dashboard
- RDS-managed database
- CI/CD pipeline integration

---

## 👩‍💻 Author

Aastha Garg  
B.Tech Computer Science Engineering  
Full-Stack Developer  

---

## 📜 Backend Credit

Backend structure adapted from SuperSimpleDev (educational reference) and integrated into a custom full-stack architecture.
