export default {
  Query: {
    allMahasiswa: (parent, args, { Mahasiswa }) => Mahasiswa.findAll(),
    getMahasiswa: (parent, { nim }, { Mahasiswa }) =>
      Mahasiswa.findOne({ where: { nim } })
  },
  Mutation: {
    createMahasiswa: (parent, args, { Mahasiswa }) => Mahasiswa.create(args),
    deleteMahasiswa: async (parent, args, { Mahasiswa }) => {
      const { nim } = args;

      const mahasiswa = await Mahasiswa.findOne({
        where: { nim }
      });

      return Mahasiswa.destroy({
        where: {
          nim
        }
      })
        .then(() => Object.assign(mahasiswa, { deleted: true }))
        .catch(() => Object.assign(mahasiswa, { deleted: false }));
    }
  },
  Mahasiswa: {
    pembimbing: ({ dataValues: { nim } }, args, { Pembimbing, Pegawai }) =>
      Pembimbing.findAll({
        where: { nim },
        include: [
          {
            model: Pegawai,
            as: 'pegawai'
          }
        ]
      }).map(val => val.pegawai),
    bimbingan: ({ dataValues: { nim } }, args, { Bimbingan }) =>
      Bimbingan.findOne({
        where: {
          nim
        }
      })
  }
};
