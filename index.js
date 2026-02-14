require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({
  origin: [
    "https://ftracker-frontend.vercel.app",
    "https://ftracker-frontend-git-main-ayeshas-projects-d815f7ff.vercel.app",
    "https://ftracker-frontend-oopu2muo1-ayeshas-projects-d815f7ff.vercel.app"
  ],
  methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));
app.options("*", cors());


const transactionRoutes = require("./routes/transactionroutes");
app.use("/api/transactions", transactionRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI); 

    console.log("MongoDB connected");

    module.exports = app;

  } catch (err) {
    console.error("DB connection failed:", err);
  }
}

startServer();
