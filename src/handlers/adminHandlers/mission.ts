import prisma from 'src/database'

export const createMission = async (req, res) => {
  const mission = await prisma.mission.create({
    data: {
      reward: req.body.reward,
      title: req.body.title,
      openAt: req.body.openAt,
      closedAt: req.body.closedAt,
      missionType: req.body.missionType,
      description: req.body.description,
      MissionDetails: {
        create: {
          contact: req.body.contact,
          website: req.body.website
        }
      },
      MissionAdress: {
        create: {}
      }
    },
    include: {
      MissionDetails: true,
      MissionAdress: true
    }
  })

  res.json({ data: mission })
}

// export const createProduct = async (req, res) => {
//   const product = await prisma.product.create({
//     data: {
//       name: req.body.name,
//       belongsToId: req.user.id,
//     },
//   });

//   res.json({ data: product });
// };

// export const updateProduct = async (req, res) => {
//   const product = await prisma.product.update({
//     where: {
//       id_belongsToId: {
//         id: req.params.id,
//         belongsToId: req.user.id,
//       },
//     },
//     data: {
//       name: req.body.name,
//     },
//   });

//   res.json({ data: product });
// };

// export const deleteProduct = async (req, res) => {
//   const product = await prisma.product.delete({
//     where: {
//       id_belongsToId: {
//         id: req.params.id,
//         belongsToId: req.user.id,
//       },
//     },
//   });
//   res.json({ data: product });
// };
