import models from './models';

export default function() {
  models.Mahasiswa.create({
    nim: 'f1e115035',
    nama: 'Daniel Pardamean',
    password: 'supersecret'
  }).then(async mahasiswa => {
    const bimbingan = await models.Bimbingan.create({
      nim: mahasiswa.nim,
      judul: 'Melakukan skripsi'
    });
    await mahasiswa.setBimbingan(bimbingan);

    const koreksi = await models.Koreksi.create({
      idBimbingan: bimbingan.id,
      judul: 'Koreksi Pertama: Judul'
    });

    bimbingan.setKoreksi(koreksi);
  });

  models.Mahasiswa.create({
    nim: 'f1e115005',
    nama: 'Bram Si anak sulung',
    password: 'supersecret'
  });

  models.Pegawai.create({
    nip: '018893749018893742',
    nama: 'Mauladi',
    password: 'supersecret',
    typeId: 1
  })
    .then(pegawai => pegawai.setMahasiswa(['f1e115035']))
    .catch(err => console.log(err));

  models.Pegawai.create({
    nip: '018893749018893749',
    nama: 'Edi Saputra',
    password: 'supersecret',
    typeId: 2
  })
    .then(pegawai => pegawai.setMahasiswa(['f1e115035']))
    .catch(err => console.log(err));

  models.Type.create({
    name: 'Dosen'
  });

  models.Type.create({
    name: 'TU'
  });
}
