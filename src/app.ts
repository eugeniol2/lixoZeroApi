import express, {
  type NextFunction,
  type Request,
  type Response
} from 'express'
import { body } from 'express-validator'
import morgan from 'morgan'

import { createUser, signin } from './handlers/user'
import { middlewareAuthentication } from './middleware/auth/auth'
import { handleInputErrors } from './middleware/handleInputErrors'
import adminRoute from './routes/adminRoute'
import router from './routes/router'
import { swagger } from './swagger'

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
