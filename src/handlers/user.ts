import prisma from "../database";
import {
  comparePasswords,
  createJWT,
  hashPassword,
} from "../middleware/auth/auth";

export const createNewUser = async (req, res) => {
  const alreadyRegistered = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
  });

  if (alreadyRegistered) {
    return res.status(400), res.json({ error: "Email já cadastrado" });
  }

  const user = await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      password: await hashPassword(req.body.password),
    },
  });

  const token = createJWT(user);
  res.json({ token });
};
