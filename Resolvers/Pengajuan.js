export default {
  Query: {
    pengajuan: (parent, { id }, { Pengajuan }) =>
      Pengajuan.findOne({
        where: { id }
      }),
    allPengajuan: (parent, args, { Pengajuan }) => Pengajuan.findAll()
  },
  Mutation: {
    createPengajuan: (parent, { judul, dokumen, bimbinganId }, { Pengajuan }) =>
      Pengajuan.create({
        judul,
        dokumen,
        bimbinganId
      }),
    updatePengajuan: async (parent, { judul, dokumen, id }, { Pengajuan }) => {
      const pengajuan = await Pengajuan.findOne({
        where: {
          id
        }
      });

      return pengajuan.update({
        judul,
        dokumen
      });
    },
    deletePengajuan: async (parent, { id }, { Pengajuan }) => {
      const pengajuan = await Pengajuan.findOne({
        where: { id }
      });

      return Pengajuan.destroy({
        where: {
          id
        }
      })
        .then(() => Object.assign(pengajuan, { deleted: true }))
        .catch(() => Object.assign(pengajuan, { deleted: false }));
    }
  },
  Pengajuan: {
    koreksi: ({ dataValues: { id } }, args, { Koreksi }) =>
      Koreksi.findAll({
        where: {
          pengajuanId: id
        }
      })
  }
};
