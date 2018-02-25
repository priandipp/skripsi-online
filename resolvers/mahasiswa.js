export default {
  Query: {
    allMahasiswa: (parent, args, { models }, info) =>
      models.Mahasiswa.findAll(),
    getMahasiswa: (parent, { nim }, { models }, info) =>
      models.Mahasiswa.findOne({ where: { nim } })
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
    }
  },
  Mahasiswa: {
    team_pembimbing: ({ dataValues: { nim } }, args, { models }, info) =>
      models.Pembimbing.findAll({
        where: { nim },
        include: [
          {
            model: models.Pegawai,
            as: 'pegawai'
          }
        ]
      }).map(val => val.pegawai),
    bimbingan: async ({ dataValues: { nim } }, args, { models }, info) =>
      models.Bimbingan.findOne({
        where: {
          nim
        }
      })
  }
};
