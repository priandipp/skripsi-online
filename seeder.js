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
      idBimbingan: 1,
      judul: 'Koreksi Pertama: Judul'
    });

    const koreksi2 = await models.Koreksi.create({
      idBimbingan: 1,
      judul: 'Koreksi Pertama: Kata Pengantar'
    });

    await models.HistoriKoreksi.bulkCreate([
      {
        idKoreksi: koreksi.id,
        judul: 'Menambahkan kop surat',
        dokumen: 'file01.doc'
      },
      {
        idKoreksi: koreksi.id,
        judul: 'Menambahkan kop surat 2',
        dokumen: 'file01.doc'
      }
    ]);
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
