export default (sequelize, DataTypes) => {
  const Bimbingan = sequelize.define(
    'bimbingan',
    {
      nim: {
        type: DataTypes.STRING
      },
      judul: {
        type: DataTypes.STRING
      },
      dokumen: {
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true
      // constraint: false
    }
  );

  Bimbingan.associate = ({ Pengajuan }) => {
    Bimbingan.hasMany(Pengajuan);
  };

  return Bimbingan;
};
