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

    const missionAlreadyDone = await prisma.user.findFirst({
      where: {
        alreadyDoneMissions: {
          has: req.params.id
        }
      }
    })

    if (missionAlreadyDone) {
      return res.status(404).json({ error: 'This mission was already done' })
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
        },
        alreadyDoneMissions: {
          push: mission.id
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

export const getAllPossibleMisssions = async (req, res) => {
  const missionIds = await prisma.user.findUnique({
    where: {
      id: req.user.id
    },
    select: {
      alreadyDoneMissions: true
    }
  })

  const mission = await prisma.mission.findMany({
    where: {
      NOT: {
        id: {
          in: missionIds.alreadyDoneMissions
        }
      }
    },
    include: {
      MissionAdress: true,
      MissionDetails: true
    }
  })

  res.json({ data: mission })
}

export const getAllUserAddedMissions = async (req, res) => {
  const userMissions = await prisma.user.findMany({
    where: {
      id: req.user.id
    },
    select: {
      Missions: true
    }
  })

  res.json({ data: userMissions })
}
