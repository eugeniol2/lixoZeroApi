import { Router } from 'express'

import { buyCoupon } from '../handlers/userCouponHandlers'
import {
  addUserMission,
  deleteUserMission,
  getAllPossibleMisssions,
  getAllUserAddedMissions,
  requestToCompleteMission
} from '../handlers/userMissionHandlers'
import { getUser } from '../handlers/user'

const router = Router()

export default router

// user
router.get('/user', getUser)

// mission
router.post('/user/mission/add/:id', addUserMission)

router.delete('/user/mission/delete/:id', deleteUserMission)

router.put('/user/mission/complete/:id', requestToCompleteMission)

router.get('/user/mission', getAllPossibleMisssions)

router.get('/user/mission/getaddedmissions', getAllUserAddedMissions)

// coupon

router.post('/coupon/:id', buyCoupon)

// router.delete('/user/coupon/delete/:id', deleteUsercoupon)

// router.put('/user/coupon/complete/:id', requestToCompletecoupon)
