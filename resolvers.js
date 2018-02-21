export default {
  Query: {
    hi: (parent, args, context, info) => 'hi'
  },
  Mutation: {
    createMahasiswa: (parent, args, { models }) => models.Mahasiswa.create(args)
  }
};
