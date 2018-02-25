export default `
    type Query {
        allMahasiswa: [Mahasiswa]
        getMahasiswa(nim: String!): Mahasiswa
        
        allPegawai(typeId: Int): [Pegawai]
        getPegawai(nip: String): Pegawai
    }
`;
