export default (sequelize, DataTypes) => {
  const Type = sequelize.define(
    'type',
    {
      name: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );

  Type.associate = models => {
    Type.hasMany(models.Pegawai, {
      foreignKey: 'type_id',
      constraints: false
    });
  };

  return Type;
};
