export default (sequelize, DataTypes) => {
  const Mahasiswa = sequelize.define(
    'mahasiswa',
    {
      nim: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );

  Mahasiswa.associat = models => {};

  return Mahasiswa;
};
