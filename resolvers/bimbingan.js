export default {
  Query: {
    allBimbingan: (parent, args, { Bimbingan }) => Bimbingan.findAll(),
    bimbingan: (parent, { nim }, { Bimbingan }) =>
      Bimbingan.findOne({
        where: { nim }
      })
  },
  Mutation: {
    updateBimbingan: async (parent, { id, judul }, { Bimbingan }) => {
      const bimbingan = await Bimbingan.findOne({
        where: {
          id
        }
      });
      return bimbingan.update({ judul });
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
