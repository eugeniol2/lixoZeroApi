import prisma from '../../database'

export const getOneMission = async (req, res) => {
  const mission = await prisma.mission.findMany({
    where: {
      id: req.params.id
    },
    include: {
      MissionAdress: true,
      MissionDetails: true
    }
  })

  res.json({ data: mission })
}

export const createMission = async (req, res) => {
  const mission = await prisma.mission.create({
    data: {
      reward: req.body.reward,
      title: req.body.title,
      openAt: req.body?.openAt || null,
      closedAt: req.body?.closedAt || null,
      missionType: req.body.missionType,
      description: req.body.description,
      MissionDetails: {
        create: {
          contact: req.body?.MissionDetails?.contact || null,
          website: req.body?.MissionDetails?.website || null,
          delivery: req.body?.MissionDetails?.delivery || false
        }
      },
      MissionAdress: {
        create: {
          street: req.body?.MissionAdress?.street || null,
          city: req.body?.MissionAdress?.city || null,
          uf: req.body?.MissionAdress?.uf || null,
          neighborhood: req.body?.MissionAdress?.neighborhood || null,
          cep: req.body?.MissionAdress?.cep || null
        }
      }
    },
    include: {
      MissionDetails: true,
      MissionAdress: true
    }
  })

  res.json({ data: mission })
}

export const getAllMissions = async (req, res) => {
  const mission = await prisma.mission.findMany({
    where: {},
    include: {
      MissionAdress: true,
      MissionDetails: true
    }
  })

  res.json({ data: mission })
}

export const updateMission = async (req, res) => {
  const mission = await prisma.mission.update({
    where: {
      id: req.params.id
    },
    data: {
      reward: req.body.reward,
      title: req.body.title,
      openAt: req.body?.openAt || null,
      closedAt: req.body?.closedAt || null,
      missionType: req.body.missionType,
      description: req.body.description,
      MissionDetails: {
        update: {
          contact: req.body?.MissionDetails?.contact || null,
          website: req.body?.MissionDetails?.website || null,
          delivery: req.body?.MissionDetails?.delivery || false
        }
      },
      MissionAdress: {
        update: {
          street: req.body?.MissionAdress?.street || null,
          city: req.body?.MissionAdress?.city || null,
          uf: req.body?.MissionAdress?.uf || null,
          neighborhood: req.body?.MissionAdress?.neighborhood || null,
          cep: req.body?.MissionAdress?.cep || null
        }
      }
    },
    include: {
      MissionDetails: true,
      MissionAdress: true
    }
  })

  res.json({ data: mission })
}

export const deleteOneMission = async (req, res) => {
  const mission = await prisma.mission.delete({
    where: {
      id: req.params.id
    },
    include: {
      MissionAdress: true,
      MissionDetails: true
    }
  })

  res.json({ data: mission })
}
