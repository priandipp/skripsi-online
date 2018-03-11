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
            args: [4, 40],
            msg: 'Nama harus memiliki 4-40 karakter'
          }
        }
      },
      password: {
        type: DataTypes.STRING
      },
      profile_picture: {
        type: DataTypes.STRING,
        defaultValue: 'default.png'
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      name: {
        singular: 'mahasiswa',
        plural: 'mahasiswa'
      }
    }
  );

  Mahasiswa.hook('beforeCreate', mahasiswa => {
    mahasiswa.dataValues.nim = mahasiswa.dataValues.nim.toUpperCase();
    mahasiswa.dataValues.password = bcrypt.hashSync(
      mahasiswa.dataValues.password,
      8
    );
  });

  Mahasiswa.associate = ({ Bimbingan, Pegawai, Pembimbing }) => {
    Mahasiswa.belongsToMany(Pegawai, {
      through: Pembimbing,
      foreignKey: 'nim',
      as: 'team_pembimbing'
    });

    Mahasiswa.hasOne(Bimbingan, {
      foreignKey: 'nim'
    });
  };

  return Mahasiswa;
};
