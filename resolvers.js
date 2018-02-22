export default {
  Query: {
    allMahasiswa: (parent, args, { models }, info) =>
      models.Mahasiswa.findAll(),
    getMahasiswa: (parent, args, { models }, info) => {
      const { nim } = args;
      return models.Mahasiswa.findOne({ where: { nim } });
    },

    allDosen: (parent, args, { models }, info) =>
      models.Pegawai.findAll({
        include: [models.Type]
      }),
    getDosen: (parent, args, { models }, info) => {
      const { nip } = args;
      return models.Pegawai.findOne({
        where: {
          nip
        },
        include: [models.Type]
      });
    }
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
      }).then(() => Object.assign(mahasiswa, { deleted: true }));

      return result;
    },

    createPegawai: (parent, args, { models }) =>
      models.Pegawai.create(args).then(pegawai => {
        const { nip } = pegawai.dataValues;
        return models.Pegawai.findOne({
          where: { nip },
          include: [models.Type]
        });
      })
  }
};
