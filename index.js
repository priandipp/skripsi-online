import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
// import multer from 'multer';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import models from './models';
import seeder from './seeder';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './Schemas')));

const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, './Resolvers'), {
    extensions: ['.js']
  })
);

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
      ...models
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

    app.get('/', async (req, res) => {
      models.Mahasiswa.findAll({
        include: [
          { model: models.Pegawai, as: 'team_pembimbing' },
          {
            model: models.Bimbingan
            // include: [
            //   {
            //     model: models.Koreksi,
            //     as: 'koreksi',
            //     include: [{ model: models.HistoriKoreksi, as: 'histori' }]
            //   }
            // ]
          }
        ]
      }).then(mahasiswa => res.json(mahasiswa));
    });

    app.listen(8000, err => {
      if (err) {
        console.error(err);
      } else {
        console.log('Server is running ...');
      }
    });
  })
  .catch(err => console.log(err));
