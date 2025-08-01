# 💸 Expense Tracker

A fullstack Expense Tracker application built with **React (Vite)** on the frontend, **Node.js + Express.js** on the backend, and **MongoDB** as the database.

This application allows users to seamlessly **add**, **view**, **update**, and **delete** expenses in real time.

---

## Tech Stack

- **Frontend:** React, Vite, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Tools & Libraries:** Axios, CORS

---

## Features

- Add new expenses with title and amount
- View all saved expenses
- Edit existing expense entries
- Delete expenses with a click
- Fast, responsive UI built with Vite + React
- RESTful API with proper error handling

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/expense-tracker.git
cd expense-tracker
```

### 2. Setup the Backend

```bash
cd backend
npm install
```

Replace MONGO_URI in app.js with your own MongoDB connection string.

Start the backend server:

```bash
node app.js
```

The backend will run on: http://localhost:3000

### 3. Setup the Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on: http://localhost:5173

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/expense` | Add a new expense |
| GET | `/expense` | Get all expenses |
| PUT | `/expense/:id` | Update an expense |
| DELETE | `/expense/:id` | Delete an expense |

---
Built with 💟 by Gokila
