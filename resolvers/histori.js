export default {
  Histori: {
    koreksiDosen: ({ dataValues: { idKoreksi } }, args, { models }, info) =>
      models.KoreksiDosen.findAll({
        where: {
          idHistoriKoreksi: idKoreksi
        }
      })
  }
};
