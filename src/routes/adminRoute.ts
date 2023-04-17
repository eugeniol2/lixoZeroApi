import { Router } from 'express'

import {
  createMission,
  deleteOneMission,
  getAllMissions,
  getOneMission,
  updateMission
} from '../handlers/adminHandlers/mission'

const router = Router()

export default router

router.post('/mission/create', createMission)

router.get('/mission/', getAllMissions)

router.get('/mission/getone/:id', getOneMission)

router.put('/mission/update/:id', updateMission)

router.delete('/mission/delete/:id', deleteOneMission)
