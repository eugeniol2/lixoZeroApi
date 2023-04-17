import prisma from '../database'
import {
  comparePasswords,
  createJWT,
  hashPassword
} from '../middleware/auth/auth'

export const createUser = async (req, res) => {
  const alreadyRegistered = await prisma.user.findUnique({
    where: {
      email: req.body.email
    }
  })

  if (alreadyRegistered) {
    return res.status(400).json({ error: 'Email já cadastrado' })
  }
  const user = await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      password: await hashPassword(req.body.password),
      UserQuizScore: {
        create: {}
      },
      UserAdress: {
        create: {}
      },
      Missions: {}
    },
    include: {
      UserQuizScore: true,
      UserAdress: true,
      Missions: true
    }
  })

  const token = createJWT(user)
  res.json({ token })
}

export const signin = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email
    }
  })

  if (!user) {
    return res.status(400).json({ error: 'Password ou email inválido' })
  }

  const isValid = await comparePasswords(req.body.password, user.password)

  if (!isValid) {
    res.status(401)
    res.json({ error: 'Password ou email inválido' })
    return
  }

  const token = createJWT(user)
  res.json({ token })
}
