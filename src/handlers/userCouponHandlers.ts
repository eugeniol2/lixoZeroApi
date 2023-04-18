import prisma from '../database'

// user needs to buy a coupon (post)

export const buyCoupon = async (req, res) => {
  try {
    const [user, coupon] = await Promise.all([
      prisma.user.findUnique({
        where: { id: req.user.id },
        include: {
          Coupon: true
        }
      }),
      prisma.coupon.findUnique({ where: { id: req.params.id } })
    ])
    const isCouponAlreadyBought = await prisma.user.findUnique({
      where: { id: req.user.id },
      include: {
        Coupon: {
          where: {
            id: req.params.id
          }
        }
      }
    })

    if (user.totalPoints < coupon.price) {
      return res.status(402).json({ error: 'Not enought points' })
    }

    if (isCouponAlreadyBought.Coupon.length) {
      return res
        .status(404)
        .json({ error: 'User already have bought this coupon' })
    }

    if (!user || !coupon) {
      return res.status(404).json({ error: 'User or coupon not found' })
    }

    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        totalPoints: {
          decrement: coupon.price
        },
        Coupon: {
          connect: { id: req.params.id }
        }
      },
      include: {
        Coupon: true
      }
    })

    res.json({ data: updatedUser })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
