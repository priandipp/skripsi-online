export default (sequelize, DataTypes) => {
  const Pembimbing = sequelize.define(
    'pembimbing',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nim: {
        type: DataTypes.STRING
      },
      nip: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );

  // Pembimbing.associate = models => {};

  return Pembimbing;
};
