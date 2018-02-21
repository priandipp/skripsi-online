export default `
    type Mahasiswa {
        nim: String!
        nama: String!
        password: String!
        profile_picture: String
        allowedToSubmit: Boolean
    }

    type Mutation {
       createMahasiswa(nim: String!, nama: String!, password: String!, profile_picture: String, allowedToSubmit:Boolean): Mahasiswa!
    }

    type Query {
        hi: String
        allMahasiswa: [Mahasiswa]
    }
`;
