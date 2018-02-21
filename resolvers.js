export default {
  Query: {
    hi: (parent, args, context, info) => 'hi',
    allMahasiswa: (parent, args, { models }, info) => models.Mahasiswa.findAll()
  },
  Mutation: {
    createMahasiswa: (parent, args, { models }) => models.Mahasiswa.create(args)
  }
};
