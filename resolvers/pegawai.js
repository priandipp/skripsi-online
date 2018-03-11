export default {
  Query: {
    allPegawai: (parent, { typeId }, { models }, info) => {
      let where;
      if (typeId != null) {
        where = {
          typeId
        };
      } else {
        where = {};
      }
      return models.Pegawai.findAll({
        where,
        include: [models.Type]
      });
    },
    getPegawai: (parent, { nip }, { models }, info) =>
      models.Pegawai.findOne({
        where: {
          nip
        },
        include: [models.Type]
      })
  },
  Mutation: {
    createPegawai: (parent, args, { models }) =>
      models.Pegawai.create(args).then(pegawai => {
        const { nip } = pegawai.dataValues;
        return models.Pegawai.findOne({
          where: { nip },
          include: [models.Type]
        });
      }),
    deletePegawai: async (parent, args, { models }, info) => {
      const { nip } = args;

      const pegawai = await models.Pegawai.findOne({
        where: { nip }
      });

      const result = await models.Pegawai.destroy({
        where: {
          nip
        }
      })
        .then(() => Object.assign(pegawai, { deleted: true }))
        .catch(err => Object.assign(pegawai, { deleted: false }));

      return result;
    }
  }
};
