export default `
    type Koreksi {
        nip: String!
        keterangan: String!
        dokumen: String!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        allKoreksi : [Koreksi]
        koreksi (id: Int!) : Koreksi
    }

    type Mutation {
        createKoreksi (nip: String! , keterangan: String!, dokumen: String!, pengajuanId: Int!): Koreksi
        updateKoreksi (id: Int!, keterangan: String!, dokumen: String!): Koreksi
    }
`;
