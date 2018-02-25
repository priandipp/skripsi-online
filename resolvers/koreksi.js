export default {
  Koreksi: {
    histori: ({ dataValues: { id } }, args, { models }, info) =>
      models.HistoriKoreksi.findAll({
        where: {
          idKoreksi: id
        }
      })
  }
};
