export default `
    type Pengajuan {
        id: Int!
        judul: String!
        dokumen: String!
        createdAt: String!
        updatedAt: String!
        koreksi: [Koreksi]
    }

    type Query {
        pengajuan (id: Int!): Pengajuan
        allPengajuan : [Pengajuan]
    }

    type Mutation {
        createPengajuan (judul: String!, dokumen: String!, bimbinganId: Int!) : Pengajuan
        updatePengajuan (id: Int!, judul: String!, dokumen: String!) : Pengajuan
    }
`;
