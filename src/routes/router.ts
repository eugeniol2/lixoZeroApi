import { Router } from 'express'

import {
  addUserMission,
  deleteUserMission,
  requestToCompleteMission
} from '../handlers/userMissionHandlers'

const router = Router()

export default router

router.post('/user/mission/add/:id', addUserMission)

router.delete('/user/mission/delete/:id', deleteUserMission)

router.put('/user/mission/complete/:id', requestToCompleteMission)
