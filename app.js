import express from "express";
import dotenv from "dotenv";
import dbcoonnect from "./config/db.js";
import { fileURLToPath } from "url";
import path from "path";
import cookieParser from "cookie-parser";
import looger from "morgan";

dotenv.config();

const app = express();
dbcoonnect();
app.use(express.json());
app.use(cookieParser("dev"));
app.use(looger("dev"));

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

app.set("view engine", "ejs");
app.set("view", path.join(_dirname, "views"));

app.get("/", (req, res) => {
  res.send("hello");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
