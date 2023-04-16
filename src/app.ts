import express, {
  type NextFunction,
  type Request,
  type Response
} from 'express'
import { body } from 'express-validator'
import morgan from 'morgan'

import { createUser, signin } from 'src/handlers/user'
import { middlewareAuthentication } from 'src/middleware/auth/auth'
import { handleInputErrors } from 'src/middleware/handleInputErrors'
import adminRoute from 'src/routes/adminRoute'
import router from 'src/routes/router'
import { swagger } from 'src/swagger'

const app = express()
swagger(app)

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.status(200)
  res.json({ message: 'hello lix0 API' })
})

app.use('/api', middlewareAuthentication, router)
app.use('/admin', adminRoute)

app.post(
  '/user',
  [body('email').exists(), body('name').exists(), body('password').exists()],
  handleInputErrors,
  createUser
)
app.post(
  '/signin',
  [body('email').exists(), body('password').exists()],
  handleInputErrors,
  signin
)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.json({ message: `had an error: ${err.message}` })
})

export default app
