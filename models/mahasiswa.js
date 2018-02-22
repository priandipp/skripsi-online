import bcrypt from 'bcryptjs';

export default (sequelize, DataTypes) => {
  const Mahasiswa = sequelize.define(
    'mahasiswa',
    {
      nim: {
        type: DataTypes.STRING(9),
        primaryKey: true,
        unique: true,
        validate: {
          len: {
            args: [9],
            msg: 'NIM Harus terdiri dari 9 karakter'
          },
          is: {
            args: /[a-z][0-9][a-z]([0-9][0-9]+)/i,
            msg: 'Masukkan NIM yang valid. contoh: F1E115040'
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
