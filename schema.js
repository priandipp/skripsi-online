export default `
    type Query {
        allMahasiswa: [Mahasiswa]
        getMahasiswa(nim: String!): Mahasiswa
        
        allPegawai(typeId: Int): [Pegawai]
        getPegawai(nip: String): Pegawai
    }
    type Mutation {
       createMahasiswa(nim: String!, nama: String!, password: String!, profile_picture: String, allowedToSubmit:Boolean): Mahasiswa!
       deleteMahasiswa(nim: String!): Mahasiswa!

       createPegawai(nip: String!, nama: String!, password: String!, profile_picture: String, typeId: Int!): Pegawai!
       deletePegawai(nip: String!): Pegawai!
    }

    type Mahasiswa {
        nim: String!
        nama: String!
        password: String!
        profile_picture: String
        allowedToSubmit: Boolean
        deleted: Boolean
        team_pembimbing: [TeamPembimbing]
    }

    type TeamPembimbing {
        nip: String!
        nama: String!
        profile_picture: String!
    }

    type Pegawai {
        nip: String
        nama: String
        password: String
        profile_picture: String
        type: Type
        deleted: Boolean
    }

    type Type {
        id: Int
        name: String
    }
`;
