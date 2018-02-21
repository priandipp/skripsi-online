import bcrypt from 'bcryptjs';

export default (sequelize, DataTypes) => {
  const Mahasiswa = sequelize.define(
    'mahasiswa',
    {
      nim: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        validate: {
          len: {
            args: [9],
            msg: 'Masukkan NIM yang valid'
          }
        }
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
      allowedToSubmit: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );

  Mahasiswa.hook('beforeCreate', mahasiswa => {
    mahasiswa.dataValues.nim = mahasiswa.dataValues.nim.toUpperCase();
    mahasiswa.dataValues.password = bcrypt.hashSync(
      mahasiswa.dataValues.password,
      8
    );
  });

  Mahasiswa.associate = models => {};

  return Mahasiswa;
};
