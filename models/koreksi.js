export default (sequelize, DataTypes) => {
  const Koreksi = sequelize.define(
    'koreksi',
    {
      idBimbingan: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      judul: {
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true
    }
  );

  Koreksi.associate = models => {
    Koreksi.hasMany(models.HistoriKoreksi, {
      foreignKey: 'idKoreksi',
      as: 'histori'
    });
  };

  return Koreksi;
};
