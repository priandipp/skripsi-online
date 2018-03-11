import Sequelize from 'sequelize';

const sequelize = new Sequelize('skripsi_online', 'root', '', {
  dialect: 'mysql'
});

const models = {
  Bimbingan: sequelize.import('./Bimbingan'),
  Koreksi: sequelize.import('./Koreksi'),
  Mahasiswa: sequelize.import('./Mahasiswa'),
  Pegawai: sequelize.import('./Pegawai'),
  Pembimbing: sequelize.import('./Pembimbing'),
  Pengajuan: sequelize.import('./Pengajuan'),
  Type: sequelize.import('./Type')
};

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.Sequelize = Sequelize;
models.sequelize = sequelize;

export default models;
