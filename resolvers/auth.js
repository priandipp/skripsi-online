import loginForMahasiswa from '../controllers/AuthMahasiswa';
import loginForPegawai from '../controllers/AuthPegawai';

export default {
  Mutation: {
    login: async (parent, args, { models }) => {
      if (args.mahasiswa) {
        return loginForMahasiswa(args, models);
      }
      return loginForPegawai(args, models);
    }
  }
};
