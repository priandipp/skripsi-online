import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export default async function loginForMahasiswa(
  { username, password },
  models
) {
  const user = await models.Mahasiswa.findOne({
    where: {
      nim: username
    }
  });

  if (!user) {
    return {
      ok: false,
      error: 'Tidak ditemukan username yang sesuai'
    };
  }

  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) {
    return {
      ok: false,
      error: 'Password salah'
    };
  }

  const token = jwt.sign({ user }, 'supersecret', {
    expiresIn: '5m'
  });

  return {
    ok: true,
    token
  };
}
