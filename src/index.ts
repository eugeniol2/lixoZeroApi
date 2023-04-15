import * as dotenv from "dotenv";
dotenv.config();
import app from "./app";
// import config from "./config";

app.listen(3001, () => {
  console.log(`Hello from http//localhost:3001`);
});
