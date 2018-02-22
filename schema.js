export default `
    type Query {
        allMahasiswa: [Mahasiswa]
        getMahasiswa(nim: String!): Mahasiswa
        
        allPegawai: [Pegawai]
        getPegawai(nip: Int): Pegawai
    }
    type Mutation {
       createMahasiswa(nim: String!, nama: String!, password: String!, profile_picture: String, allowedToSubmit:Boolean): Mahasiswa!
       deleteMahasiswa(nim: String!): Mahasiswa!

       createPegawai(nip: String!, nama: String!, password: String!, profile_picture: String, type_id: Int!): Pegawai!
       deletePegawai(nim: String!): Pegawai!
    }

    type Mahasiswa {
        nim: String!
        nama: String!
        password: String!
        profile_picture: String
        allowedToSubmit: Boolean
        deleted: Boolean
    }

    type Pegawai {
        nip: String
        nama: String
        password: String
        profile_picture: String
        type: Type
    }

    type Type {
        id: Int
        name: String
    }
`;
