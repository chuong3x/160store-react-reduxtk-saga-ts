import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { routerAuth } from "./routers/index.js";

dotenv.config();

const app = express();
const PORT = process.env.AUTHPORT || 9900;
const DBURL = process.env.DBURL;

//Use middlewares
app.use(bodyParser.json({ limit: "60mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "60mb" }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());

//Connect DB
mongoose
  .connect(DBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("err", err);
  });

//use Routes
routerAuth(app);

//Run server
app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
