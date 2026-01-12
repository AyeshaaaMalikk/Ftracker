const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// routes
const transactionRoutes = require("./routes/transactionroutes");
app.use("/api/transactions", transactionRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

// ✅ SIMPLE MongoDB connect (WORKS on Vercel)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB error:", err);
  });

module.exports = app;
