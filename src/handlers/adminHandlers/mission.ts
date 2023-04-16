import prisma from "../../database";

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
          delivery: req.body?.MissionDetails?.delivery || false,
        },
      },
      MissionAdress: {
        create: {
          street: req.body?.MissionAdress?.street || null,
          city: req.body?.MissionAdress?.city || null,
          uf: req.body?.MissionAdress?.uf || null,
          neighborhood: req.body?.MissionAdress?.neighborhood || null,
          cep: req.body?.MissionAdress?.cep || null,
        },
      },
    },
    include: {
      MissionDetails: true,
      MissionAdress: true,
    },
  });

  res.json({ data: mission });
};

export const getMission = async (req, res) => {
  const mission = await prisma.mission.findMany({
    where: {},
  });
};
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
