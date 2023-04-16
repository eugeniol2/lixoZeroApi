import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const comparePasswords = async (password, hash) => {
  return await bcrypt.compare(password, hash)
}

export const hashPassword = async password => {
  return await bcrypt.hash(password, 5)
}

export const createJWT = user => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  )
  return token
}

export const middlewareAuthentication = (req, res, next) => {
  const bearer = req.headers.authorization

  if (!bearer) {
    res.status(401)
    res.send('Not authorized')
    return
  }

  const [, token] = bearer.split(' ')
  if (!token) {
    res.status(401)
    res.send('Not authorized')
    return
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = payload
    next()
    return
  } catch (e) {
    res.status(401)
    res.send('Not authorized')
  }
}

export const isAdminMiddleware = (req, res, next) => {
  const bearer = req.headers.authorization
  const [, adminToken] = bearer.split(' ')
  if (adminToken !== process.env.ADMIN_KEY) {
    return res.status(401).send('Not authorized')
  }

  res.status(200).send('welcome admin')
}
