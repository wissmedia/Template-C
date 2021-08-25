const express = require('express')
const mongoose = require('mongoose');

require("dotenv").config();
const {
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB,
} = process.env

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

const URI = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

const app = express()
const port = process.env.PORT || 1000

mongoose.connect(URI, options)
  .then(result => {
    console.log(`Connected to DB at ${MONGO_HOSTNAME}:${MONGO_PORT}`)
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`)
    })
  })
  .catch(err => {
    console.log(err)
  })

app.get('/', (req, res) => {
  res.send('its work')
})