export default (sequelize, DataTypes) => {
  const HistoriKoreksi = sequelize.define(
    'historiKoreksi',
    {
      idKoreksi: {
        type: DataTypes.INTEGER
      },
      judul: {
        type: DataTypes.STRING
      },
      dokumen: {
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true
    }
  );

  HistoriKoreksi.associate = models => {};

  return HistoriKoreksi;
};
