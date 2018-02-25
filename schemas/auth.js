export default `
    type Mutation {
        login(username: String!, password: String!, mahasiswa: Boolean!): Auth
    }

    type Auth {
        ok: Boolean!
        token: String
        error: String
    }
`;
