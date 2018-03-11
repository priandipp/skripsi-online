export default (sequelize, DataTypes) => {
  const Koreksi = sequelize.define(
    'koreksi',
    {
      nip: {
        type: DataTypes.STRING
      },
      keterangan: {
        type: DataTypes.TEXT
      },
      dokumen: {
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true
    }
  );

  Koreksi.associate = ({ Pengajuan }) => {
    Koreksi.belongsTo(Pengajuan);
  };

  return Koreksi;
};
