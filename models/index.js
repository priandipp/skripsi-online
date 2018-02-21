import Sequelize from 'sequelize';

const sequelize = new Sequelize('skripsi_online', 'root', '', {
  dialect: 'mysql'
});

const models = {
  Mahasiswa: sequelize.import('./mahasiswa'),
  Pegawai: sequelize.import('./pegawai'),
  Type: sequelize.import('./type')
};

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.Sequelize = Sequelize;
models.sequelize = sequelize;

export default models;
