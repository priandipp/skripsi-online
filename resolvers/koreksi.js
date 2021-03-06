export default {
  Query: {
    allKoreksi: (parent, args, { Koreksi }) => Koreksi.findAll(),
    koreksi: (parent, { id }, { Koreksi }) =>
      Koreksi.findOne({
        where: { id }
      })
  },
  Mutation: {
    createKoreksi: async (
      parent,
      { nip, keterangan, dokumen, pengajuanId },
      { Koreksi }
    ) => {
      const koreksi = await Koreksi.create({
        nip,
        keterangan,
        dokumen
      });

      return koreksi.setPengajuan([pengajuanId]);
    },
    updateKoreksi: async (parent, { keterangan, dokumen, id }, { Koreksi }) => {
      const koreksi = await Koreksi.findOne({
        where: { id }
      });

      return koreksi.update({
        keterangan,
        dokumen
      });
    }
  }
};
