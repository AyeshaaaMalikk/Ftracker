require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());




const transactionRoutes = require("./routes/transactionroutes");
app.use("/api/transactions", transactionRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});

// ✅ Connect to Mongo (without wrapping export inside)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("DB connection failed:", err));

// ✅ Export OUTSIDE everything
module.exports = app;
