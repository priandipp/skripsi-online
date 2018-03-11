export default `
    type Bimbingan {
        id: Int!
        judul: String!
        createdAt: String!
        updatedAt: String!
        pengajuan: [Pengajuan]
    }

    type Query {
        allBimbingan: [Bimbingan],
        bimbingan (nim: String!): Bimbingan
    }

    type Mutation {
        updateBimbingan (id: Int!, judul: String!): Bimbingan
    }
`;
