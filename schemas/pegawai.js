export default `
    type Pegawai {
        nip: String
        nama: String
        password: String
        profile_picture: String
        type: Type
        deleted: Boolean
    }

    type Query {
        allPegawai(typeId: Int): [Pegawai]
        getPegawai(nip: String): Pegawai
    }

    type Mutation {
        createPegawai(nip: String!, nama: String!, password: String!, profile_picture: String, typeId: Int!): Pegawai!
        deletePegawai(nip: String!): Pegawai!
    }
`;
