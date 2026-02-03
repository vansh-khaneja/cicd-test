const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware to read JSON body
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// sample API
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node backend" });
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}).on('error', (err) => {
  console.error('Server error:', err);
});
