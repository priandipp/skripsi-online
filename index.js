import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers';

import models from './models';
import seeder from './seeder';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();

// const storage = multer.diskStorage({
//   destination: './public/upload',
//   filename: (req, file, callback) => {
//     callback(null, file.originalname);
//   }
// });

// const upload = multer({
//   storage
// }).single('name-property');

const graphqlEndpoint = '/graphql';

app.use(
  graphqlEndpoint,
  bodyParser.json(),
  graphqlExpress({
    schema,
    context: {
      models
    }
  })
);
app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));

models.sequelize
  .sync({
    force: true
  })
  .then(() => {
    seeder();

    app.get('/', (req, res) => {
      // res.json({
      //   message: 'Selamat datang di website skripsi online!'
      // });
      models.Mahasiswa.findAll({
        include: [{ model: models.Pegawai, as: 'team_pembimbing' }]
      }).then(mahasiswa => res.json(mahasiswa));
    });

    app.listen(8000, err => {
      if (err) {
        console.error(err);
      } else {
        console.log('Server is running ...');
      }
    });
  });
