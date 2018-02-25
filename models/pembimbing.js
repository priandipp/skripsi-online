export default (sequelize, DataTypes) => {
  const Pembimbing = sequelize.define(
    'pembimbing',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nim: {
        type: DataTypes.STRING
      },
      nip: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      constraints: false
    }
  );

  Pembimbing.associate = models => {
    Pembimbing.belongsTo(models.Pegawai, {
      foreignKey: 'nip',
      as: 'pegawai'
    });
  };

  return Pembimbing;
};
