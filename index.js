import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers';

import models from './models';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();

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
    force: true,
    underscored: true
  })
  .then(() => {
    models.Mahasiswa.create({
      nim: 'f1e115035',
      nama: 'Daniel Pardamean',
      password: 'supersecret'
    });

    models.Pegawai.create({
      nip: '01889374',
      nama: 'Daniel Joko',
      password: 'supersecret',
      type_id: 1
    });

    models.Type.create({
      name: 'Dosen'
    });

    app.get('/', (req, res) => {
      models.Type.findAll({
        include: [models.Pegawai]
      }).then(users => {
        res.json(users);
      });
    });

    app.listen(8000, err => {
      if (err) {
        console.error(err);
      } else {
        console.log('Server is running ...');
      }
    });
  });
