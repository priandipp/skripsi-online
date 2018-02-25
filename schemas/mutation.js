export default `
    type Mutation {
        createMahasiswa(nim: String!, nama: String!, password: String!, profile_picture: String, allowedToSubmit:Boolean): Mahasiswa!
        deleteMahasiswa(nim: String!): Mahasiswa!

        createPegawai(nip: String!, nama: String!, password: String!, profile_picture: String, typeId: Int!): Pegawai!
        deletePegawai(nip: String!): Pegawai!
    }
 `;
