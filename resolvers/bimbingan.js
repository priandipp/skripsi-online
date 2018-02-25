export default {
  Bimbingan: {
    koreksi: ({ dataValues: { id } }, args, { models }, info) =>
      models.Koreksi.findAll({
        where: {
          idBimbingan: id
        }
      })
  }
};
