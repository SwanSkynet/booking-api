import express, { response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
//const expresss = require("express");
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongo db ");
  } catch (error) {
    console.log("Initial Connection failed");
    throw error;
  }
};
mongoose.connection.on("connected", () => {
  console.log("Mongo db connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongo db disconnected");
});

//middlewares
//app.use(cookieParser);
app.use(express.json());
app.use("/api/check", (req, res) => {
  res.send("Hello Check ");
});
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong !";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8000, () => {
  connect();
  console.log("Started backed........ddd!!");
});
