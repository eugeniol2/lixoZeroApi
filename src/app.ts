import express from "express";
// import router from "../src/routes/router";
import morgan from "morgan";
// import { createNewUser, signin } from "./handlers/user";
// import { protect } from "./modules/auth";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("Hello from express");
  res.status(200);
  res.json({ message: "hello" });
});

// app.use("/api", protect, router);

// app.post("/user", createNewUser);
// app.post("/signin", signin);

app.use((err, req, res, next) => {
  console.log(err);
  res.json({ message: `had an error: ${err.message}` });
});

export default app;
