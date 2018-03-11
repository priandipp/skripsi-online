export default `
    type Mahasiswa {
        nim: String!
        nama: String!
        password: String!
        profile_picture: String
        pembimbing: [Pegawai]
        bimbingan: Bimbingan
        deleted: Boolean
    }

    type Query {
        allMahasiswa: [Mahasiswa]
        getMahasiswa(nim: String!): Mahasiswa
    }

    type Mutation {
        createMahasiswa(nim: String!, nama: String!, password: String!, profile_picture: String): Mahasiswa!
        deleteMahasiswa(nim: String!): Mahasiswa!
    }
`;
