export default `
    type Mahasiswa {
        nim: String!
        nama: String!
        password: String!
        profile_picture: String
        allowedToSubmit: Boolean
        deleted: Boolean
        team_pembimbing: [TeamPembimbing]
        bimbingan: Bimbingan
    }
`;
