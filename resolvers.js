export default {
  Query: {
    allMahasiswa: (parent, args, { models }, info) =>
      models.Mahasiswa.findAll({
        include: [{ model: models.Pegawai, as: 'team_pembimbing' }]
      }),
    getMahasiswa: (parent, { nim }, { models }, info) =>
      models.Mahasiswa.findOne({ where: { nim } }),
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
    createMahasiswa: (parent, args, { models }) =>
      models.Mahasiswa.create(args),
    deleteMahasiswa: async (parent, args, { models }, info) => {
      const { nim } = args;

      const mahasiswa = await models.Mahasiswa.findOne({
        where: { nim }
      });

      const result = await models.Mahasiswa.destroy({
        where: {
          nim
        }
      })
        .then(() => Object.assign(mahasiswa, { deleted: true }))
        .catch(err => Object.assign(mahasiswa, { deleted: false }));

      return result;
    },

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
