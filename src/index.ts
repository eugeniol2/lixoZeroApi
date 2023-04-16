import * as dotenv from 'dotenv'

import app from 'src/app'
dotenv.config()
// import config from "./config";

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Hello from http//localhost:${process.env.PORT}`)
})
