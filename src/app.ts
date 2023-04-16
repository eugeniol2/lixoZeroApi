import express from "express";
// import router from "../src/routes/router";
import morgan from "morgan";
import { middlewareAuthentication } from "./middleware/auth/auth";
import router from "./routes/router";
import { createUser, signin } from "./handlers/user";
import { handleInputErrors } from "./middleware/handleInputErrors";
import { body, oneOf, validationResult } from "express-validator";
// import { createNewUser, signin } from "./handlers/user";
// import { protect } from "./modules/auth";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("Hello from express");
  res.status(200);
  res.json({ message: "hello lix0 API" });
});

app.use("/api", middlewareAuthentication, router);

app.post(
  "/user",
  [body("email").exists(), body("name").exists(), body("password").exists()],
  handleInputErrors,
  createUser
);
app.post(
  "/signin",
  [body("email").exists(), body("password").exists()],
  handleInputErrors,
  signin
);

app.use((err, req, res, next) => {
  console.log(err);
  res.json({ message: `had an error: ${err.message}` });
});

export default app;
