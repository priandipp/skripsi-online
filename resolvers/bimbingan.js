export default {
  Query: {
    allBimbingan: (parent, args, { Bimbingan }) => Bimbingan.findAll(),
    bimbingan: (parent, { nim }, { Bimbingan }) =>
      Bimbingan.findOne({
        where: { nim }
      })
  },
  Mutation: {
    createBimbingan: (parent, { nim, judul, dokumen }, { Bimbingan }) =>
      Bimbingan.create({
        nim,
        judul,
        dokumen
      }),
    updateBimbingan: async (parent, { id, judul }, { Bimbingan }) => {
      const bimbingan = await Bimbingan.findOne({
        where: {
          id
        }
      });
      return bimbingan.update({ judul });
    },
    deleteBimbingan: async (parent, { id }, { Bimbingan }) => {
      const bimbingan = await Bimbingan.findOne({
        where: { id }
      });

      return Bimbingan.destroy({
        where: {
          id
        }
      })
        .then(() => Object.assign(bimbingan, { deleted: true }))
        .catch(() => Object.assign(bimbingan, { deleted: false }));
    }
  },
  Bimbingan: {
    pengajuan: ({ dataValues: { id } }, args, { Pengajuan }) =>
      Pengajuan.findAll({
        where: {
          bimbinganId: id
        }
      })
  }
};
