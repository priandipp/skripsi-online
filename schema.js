export default `
    type Query {
        allMahasiswa: [Mahasiswa]
        getMahasiswa(nim: String!): Mahasiswa
        
        allDosen: [Dosen]
        getDosen(nip: Int): Dosen
    }
    type Mutation {
       createMahasiswa(nim: String!, nama: String!, password: String!, profile_picture: String, allowedToSubmit:Boolean): Mahasiswa!
       deleteMahasiswa(nim: String!): Mahasiswa!

       createPegawai(nip: String!, nama: String!, password: String!, profile_picture: String, type_id: Int!): Dosen!
    }

    type Mahasiswa {
        nim: String!
        nama: String!
        password: String!
        profile_picture: String
        allowedToSubmit: Boolean
        deleted: Boolean
    }

    type Dosen {
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
