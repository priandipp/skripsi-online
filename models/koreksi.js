export default (sequelize, DataTypes) => {
  const Koreksi = sequelize.define(
    'koreksi',
    {
      idBimbingan: {
        type: DataTypes.STRING
      },
      judul: {
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true
    }
  );

  Koreksi.associate = models => {};

  return Koreksi;
};
