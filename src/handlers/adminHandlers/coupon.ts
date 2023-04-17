import prisma from '../../database'

export const getOneCoupon = async (req, res) => {
  const coupon = await prisma.coupon.findUnique({
    where: {
      id: req.params.id
    },
    include: {
      User: true
    }
  })
  if (!coupon) {
    return res.status(404).json({ error: 'not found' })
  }
  res.json({ data: coupon })
}

export const createCoupon = async (req, res) => {
  const coupon = await prisma.coupon.create({
    data: {
      isPercentage: req.body.isPercentage,
      discount: req.body.discount,
      isUsed: req.body.isUsed,
      availableAt: req.body.availableAt,
      amountLeft: req.body.amountLeft,
      price: req.body.price,
      companies: req.body.companies || [],
      observations: req.body.observations || []
    }
  })

  res.json({ data: coupon })
}

export const getAllCoupons = async (req, res) => {
  const coupons = await prisma.coupon.findMany({})

  res.json({ data: coupons })
}

export const updateCoupon = async (req, res) => {
  try {
    const coupon = await prisma.coupon.update({
      where: {
        id: req.params.id
      },
      data: {
        isPercentage: req.body.isPercentage,
        discount: req.body.discount || 0,
        isUsed: req.body.isUsed || false,
        availableAt: req.body.availableAt,
        amountLeft: req.body.amountLeft,
        price: req.body.price,
        companies: req.body.companies || [],
        observations: req.body.observations || []
      }
    })

    res.json({ data: coupon })
  } catch (error) {
    res.status(404).json({ error: 'not found' })
  }
}

export const deleteOneCoupon = async (req, res) => {
  try {
    const coupon = await prisma.coupon.delete({
      where: {
        id: req.params.id
      }
    })

    res.json({ data: coupon })
  } catch (error) {
    res.status(404).json({ error: 'not found' })
  }
}
