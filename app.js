const express = require('express')
const path = require('path')
const morgan = require('morgan')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')

const { requireAuth, checkUser } = require('./middleware/auth')
const authRouter = require('./routes/auth')

require("dotenv").config();
const {
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB,
} = process.env

const URI = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

const app = express()
const port = process.env.PORT || 1000
const appTitle = 'Paperon'

mongoose.connect(URI)
  .then(result => {
    console.log(`Connected to DB at ${MONGO_HOSTNAME}:${MONGO_PORT}`)
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`)
    })
  })
  .catch(err => {
    console.log(err)
  })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))

app.get('*', checkUser)

app.get('/', (req, res) => {
  let navMenus = [
    { link: '/responden', icon: 'fas fa-search', label: 'Mulai Menjawab' },
  ]
  res.render('index', { appTitle, navTitle: 'Beranda', navMenus })
})

app.use(authRouter)

app.use((req, res) => {
  res.status(404).render('404', {appTitle, navTitle: 'Oops...'})
})