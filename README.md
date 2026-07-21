# ToDo Assignment

A full-stack Todo application designed to manage daily tasks efficiently. This project features a clean user interface and a robust backend API to handle all task operations.

## 🚀 Features

- **Task Management**: Create, read, update, and delete (CRUD) tasks.
- **Status Toggles**: Mark tasks as completed or pending.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
- **Data Persistence**: Keeps your tasks safely stored in a database.

## 🛠️ Tech Stack

**Frontend:**
- HTML, CSS, JavaScript (or React / Next.js)

**Backend:**
- Node.js, Express (or Python / Django / Java)

**Database:**
- MongoDB (or MySQL / PostgreSQL)

## 📁 Project Structure

```text
Todo_assignment/
├── frontend/     # Frontend user interface files
└── backend/      # Backend API and server configuration
```

## ⚙️ Installation & Setup

Follow these steps to run the project locally on your machine.

### Prerequisites
- Node.js installed (v16 or higher recommended)
- Git installed

### 1. Clone the Repository
```bash
git clone https://github.com
cd ToDo_Assignment_Alter
```

### 2. Setup the Backend
```bash
cd backend
npm install
# Create a .env file and add your environment variables (e.g., PORT, DB_URL)
npm start
```

### 3. Setup the Frontend
```bash
cd ../frontend
npm install  # (Skip if using plain HTML/CSS/JS)
npm start    # (Or open index.html in your browser)
```

## 🌐 API Endpoints (Backend)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/todos` | Fetch all todo items |
| `POST` | `/api/todos` | Create a new todo item |
| `PUT` | `/api/todos/:id` | Update an existing todo |
| `DELETE` | `/api/todos/:id` | Delete a todo item |

---
*Created as part of a technical assignment by [Darshu236](https://github.com).*
