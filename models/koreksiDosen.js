export default (sequelize, DataTypes) => {
  const KoreksiDosen = sequelize.define(
    'koreksiDosen',
    {
      idHistoriKoreksi: {
        type: DataTypes.INTEGER
      },
      nip: {
        type: DataTypes.STRING
      },
      keterangan: {
        type: DataTypes.TEXT
      },
      dokumen: {
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true
    }
  );

  KoreksiDosen.associate = models => {};

  return KoreksiDosen;
};
