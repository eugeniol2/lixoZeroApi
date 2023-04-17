import prisma from '../database'

export const addUserMission = async (req, res) => {
  try {
    const [user, mission] = await Promise.all([
      prisma.user.findUnique({
        where: { id: req.user.id },
        include: {
          Missions: true
        }
      }),
      prisma.mission.findUnique({ where: { id: req.params.id } })
    ])

    if (!user || !mission) {
      res.status(404).json({ error: 'User or mission not found' })
      return
    }

    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        Missions: {
          connect: { id: req.params.id }
        }
      },
      include: {
        Missions: true
      }
    })

    res.json({ data: updatedUser })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteUserMission = async (req, res) => {
  try {
    const [user, mission] = await Promise.all([
      prisma.user.findUnique({
        where: { id: req.user.id },
        include: {
          Missions: true
        }
      }),
      prisma.mission.findUnique({ where: { id: req.params.id } })
    ])

    if (!user || !mission) {
      res.status(404).json({ error: 'User or mission not found' })
      return
    }

    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        Missions: {
          disconnect: { id: req.params.id }
        }
      },
      include: {
        Missions: true
      }
    })

    res.json({ data: updatedUser })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const requestToCompleteMission = async (req, res) => {
  try {
    const isValid = true

    if (!isValid) {
      return res.json({
        error: 'A requisição de conclusão de missão foi negada'
      })
    }

    const mission = await prisma.mission.findUnique({
      where: {
        id: req.params.id
      }
    })

    const rewardValue = mission.reward
    const updatedUser = await prisma.user.update({
      where: {
        id: req.user.id
      },
      data: {
        totalPoints: {
          increment: rewardValue
        },
        Missions: {
          disconnect: { id: req.params.id }
        }
      },
      include: {
        Missions: true
      }
    })

    res.json({ data: updatedUser })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
  // credit on the user
  // delete mission from the user
}
