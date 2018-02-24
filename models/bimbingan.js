export default (sequelize, DataTypes) => {
  const Bimbingan = sequelize.define(
    'bimbingan',
    {
      nim: {
        type: DataTypes.STRING
      },
      judul: {
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true,
      constraint: false
    }
  );

  Bimbingan.associate = models => {
    Bimbingan.hasMany(models.Koreksi, {
      foreignKey: 'id',
      as: 'koreksi'
    });
  };

  return Bimbingan;
};
