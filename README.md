# 🚀 Next.js Project with XAMPP & MySQL

This is a **Next.js** project that connects to a **MySQL database** using **XAMPP**. The main goal of this project is to **retrieve data from SQL and display it in a bar chart on the frontend**.

## 📌 Prerequisites
Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [XAMPP](https://www.apachefriends.org/) (For MySQL and Apache)

## 🛠️ Setup Instructions

### **1️⃣ Install & Start XAMPP**
1. Download and install [XAMPP](https://www.apachefriends.org/).
2. Open **XAMPP Control Panel**.
3. Start the **Apache** and **MySQL** services.

### **2️⃣ Create the Database**
1. Open **phpMyAdmin** by visiting:  
   👉 `http://localhost/phpmyadmin/`
2. Click **New**, enter a database name (e.g., `my_next_app`), and click **Create**.
3. Ensure **MySQL is running on port 3308** (you can check this in XAMPP settings).

### **3️⃣ Clone the Repository & Install Dependencies**
```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
```

### **4️⃣ Configure Database Connection**
Create a `.env` file in the project root and add the following:
```env
DATABASE_URL="mysql://root:@localhost:3308/my_next_app"
```
- `root` → Default MySQL username (change if needed).
- No password → Leave blank unless you've set one.
- `3308` → Make sure MySQL is running on this port.

### **5️⃣ Create the Sales Table (SQL Query)**
If your project needs a sales table, execute the following SQL query in phpMyAdmin:
```sql
CREATE TABLE sales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    sale_date DATE NOT NULL
);
```

To insert some initial data:
```sql
INSERT INTO sales (product, quantity, price, sale_date) VALUES
('Laptop', 5, 1200.50, '2024-01-10'),
('Phone', 10, 700.00, '2024-01-11'),
('Tablet', 7, 450.00, '2024-01-12');
```

### **6️⃣ Run Database Migrations (If Using Prisma)**
If you're using Prisma ORM, apply migrations with:
```sh
npx prisma migrate dev --name init
```
This will create tables in your MySQL database.

### **7️⃣ Start the Project**
```sh
npm run dev
```
Now, open your browser and visit:
👉 `http://localhost:3000`

## 🎯 Key Features
✅ Connects to **MySQL** using XAMPP  
✅ Retrieves and processes data from SQL  
✅ Displays **bar charts** for data visualization  
✅ Implements **API integration** for fetching database records  

---
This project is aimed at learning **Next.js, MySQL, and data visualization** using bar charts. Contributions and feedback are welcome! 🚀

