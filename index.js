import express from 'express';
import models from './models';

const app = express();

models.sequelize
  .sync({
    force: true
  })
  .then(() => {
    app.listen(8000, err => {
      if(err){
        console.error(err);
      }else{
        console.log("Server is running ...");
      }
    });
  });
