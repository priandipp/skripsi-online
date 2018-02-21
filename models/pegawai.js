export default (sequelize, DataTypes) => {
  const Pegawai = sequelize.define(
    'pegawai',
    {
      nip: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true
      },
      nama: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      profile_picture: {
        type: DataTypes.STRING,
        defaultValue: 'default.png'
      },
      type_id: {
        type: DataTypes.INTEGER
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      defaultScope: {
        attributes: { exclude: ['type_id'] }
      }
    }
  );

  Pegawai.associate = models => {
    Pegawai.belongsTo(models.Type, {
      foreignKey: 'type_id',
      constraints: false
    });
  };

  Pegawai.hook('beforeCreate', pegawai => {
    pegawai.dataValues.nip = pegawai.dataValues.nip.toUpperCase();
  });

  return Pegawai;
};
