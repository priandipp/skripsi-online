import bcrypt from 'bcryptjs';

export default (sequelize, DataTypes) => {
  const Pegawai = sequelize.define(
    'pegawai',
    {
      nip: {
        type: DataTypes.STRING(18),
        primaryKey: true,
        unique: true,
        validate: {
          len: {
            args: [18, 18],
            msg: 'NIP harus terdiri dari 18 angka'
          }
        }
      },
      nama: {
        type: DataTypes.STRING(40),
        validate: {
          len: {
            args: [10, 40],
            msg: 'Nama harus memiliki 10-40 karakter'
          }
        }
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
    pegawai.dataValues.password = bcrypt.hashSync(
      pegawai.dataValues.password,
      8
    );
  });

  return Pegawai;
};
