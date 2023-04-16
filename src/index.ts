import * as dotenv from "dotenv";
dotenv.config();
import app from "./app";
// import config from "./config";

app.listen(process.env.PORT, () => {
  console.log(`Hello from http//localhost:3001`);
});
