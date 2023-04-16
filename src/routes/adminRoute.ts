import { Router } from 'express'

import { createMission } from 'src/handlers/adminHandlers/mission'

const router = Router()

export default router

router.post('/mission', createMission)
