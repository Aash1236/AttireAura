const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes");

//create database connection
mongoose
  .connect(
    "mongodb+srv://ashutoshfase1028:ashutoshfase1028@cluster0.n2amj.mongodb.net/"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error));

const app = express(); //appcreated
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
