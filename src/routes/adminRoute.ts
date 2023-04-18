import { Router } from 'express'

import {
  createCoupon,
  deleteOneCoupon,
  getAllCoupons,
  getOneCoupon,
  updateCoupon
} from '../handlers/adminHandlers/coupon'
import {
  createMission,
  deleteOneMission,
  getAllMissions,
  getOneMission,
  updateMission
} from '../handlers/adminHandlers/mission'

const router = Router()

export default router

// missions
router.post('/mission/create', createMission)

router.get('/mission/', getAllMissions)

router.get('/mission/getone/:id', getOneMission)

router.put('/mission/update/:id', updateMission)

router.delete('/mission/delete/:id', deleteOneMission)

// coupon

router.post('/coupon/create', createCoupon)

router.get('/coupon/', getAllCoupons)

router.get('/coupon/getone/:id', getOneCoupon)

router.put('/coupon/update/:id', updateCoupon)

router.delete('/coupon/delete/:id', deleteOneCoupon)
