import models from './models';

export default async function() {
  await models.Type.create({
    name: 'Dosen'
  });

  await models.Type.create({
    name: 'TU'
  });

  const mahasiswa = await models.Mahasiswa.create({
    nim: 'f1e115035',
    nama: 'Daniel Pardamean',
    password: 'supersecret'
  });

  const bimbingan = await models.Bimbingan.create({
    nim: mahasiswa.nim,
    judul: 'Melakukan skripsi Data Mining Kesehatan'
  });

  const pengajuan = await models.Pengajuan.create({
    judul: 'Pengajuan Pertama: Judul'
  });

  await pengajuan.setBimbingan([bimbingan.id]);

  const pengajuan2 = await models.Pengajuan.create({
    judul: 'Pengajuan Kedua: Kata Pengantar'
  });

  await pengajuan2.setBimbingan([bimbingan.id]);

  const mahasiswa2 = await models.Mahasiswa.create({
    nim: 'f1e115005',
    nama: 'Bram Si anak sulung',
    password: 'supersecret'
  });

  const dosen = await models.Pegawai.create({
    nip: '018893749018893742',
    nama: 'Mauladi',
    password: 'supersecret',
    typeId: 1
  });

  await dosen.setMahasiswa([mahasiswa.nim]);

  const dosen2 = await models.Pegawai.create({
    nip: '018893749018893749',
    nama: 'Edi Saputra',
    password: 'supersecret',
    typeId: 1
  });

  dosen2.setMahasiswa([mahasiswa.nim]);

  const koreksi = await models.Koreksi.create({
    nip: dosen.nip,
    keterangan: 'Perbaiki bagian salam',
    dokumen: 'revisi-20102.pdf'
  });

  await koreksi.setPengajuan([pengajuan2.id]);
}
