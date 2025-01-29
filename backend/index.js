const express = require("express");
const cors = require("cors"); // Corrected import for cors
const { connection } = require("./database/db"); // Ensure this file exists and works
const { router } = require("./routes/userRoute"); // Correct file path
const { Users } = require("./models/userSchema"); // Correct file path

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(router);

// Root Route
app.get("/", (req, res) => {
  res.send("HII");
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// Database Connection
connection().then(() => {
  console.log("Database connected successfully.");
}).catch((err) => {
  console.error("Error connecting to the database:", err);
});
