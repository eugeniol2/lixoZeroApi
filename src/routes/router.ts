import { Router } from 'express'

import {
  addUserMission,
  deleteUserMission,
  requestToCompleteMission
} from '../handlers/userMissionHandlers'

const router = Router()

export default router

// mission
router.post('/user/mission/add/:id', addUserMission)

router.delete('/user/mission/delete/:id', deleteUserMission)

router.put('/user/mission/complete/:id', requestToCompleteMission)

// coupon

router.post('/user/coupon/add/:id', addUsercoupon)

router.delete('/user/coupon/delete/:id', deleteUsercoupon)

router.put('/user/coupon/complete/:id', requestToCompletecoupon)
