export default `
    type Bimbingan {
        id: Int!
        judul: String!
        createdAt: String!
        updatedAt: String!
        pengajuan: [Pengajuan]
        deleted: Boolean
    }

    type Query {
        allBimbingan: [Bimbingan],
        bimbingan (nim: String!): Bimbingan
    }

    type Mutation {
        createBimbingan (nim: String!, judul: String!, dokumen: String!): Bimbingan
        updateBimbingan (id: Int!, judul: String!): Bimbingan
        deleteBimbingan (id: Int!): Bimbingan
    }
`;
