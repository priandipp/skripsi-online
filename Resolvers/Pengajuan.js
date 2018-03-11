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
