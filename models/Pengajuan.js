export default (sequelize, DataTypes) => {
  const Pengajuan = sequelize.define(
    'pengajuan',
    {
      judul: {
        type: DataTypes.STRING
      },
      dokumen: {
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true
    }
  );

  Pengajuan.associate = ({ Bimbingan, Koreksi }) => {
    Pengajuan.belongsTo(Bimbingan);
    Pengajuan.hasMany(Koreksi);
  };

  return Pengajuan;
};
