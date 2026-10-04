const express =  require('express')
const { engine } = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

const app = express() //iniciando express com a variável app

const conn = require('./db/conn')

//Models: criam as tabelas quando o programa é iniciado
const Tought = require('./models/Tought')
const User = require('./models/User')

// Import Routes
const toughtsRoutes = require('./routes/toughtsRoutes')
const authRoutes = require('./routes/authRoutes')


const ToughtsController = require('./controllers/ToughtsController')

//template engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

//receber resposta do body
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

// session middleware: onde o express vai salvar as sessões
app.use(
  session({
    name: "session",
    secret: "nosso_secret",
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function () {},
      path: require('path').join(require('os').tmpdir(), 'sessions'), //path é o caminho para salvar o arquivo sessão, que no caso é na pasta sessions para que o usuario permaneça logado
    }),
cookie: {
  secure: false,
  maxAge: 360000,
  expires: new Date(Date.now() + 360000),
  httpOnly: true
}
}),
)

// flash messages
app.use(flash())

// public path: assets,javascript,imagens,css
app.use(express.static('public'))


// set session to res: salvar userid na sessão
app.use((req, res, next) => {
  if(req.session.userid) {
    res.locals.session = req.session
  }

  next()

})

//Routes
app.use('/toughts', toughtsRoutes)
app.use('/', authRoutes)

app.get('/', ToughtsController.showToughts)



conn
//.sync({force: true}) //o force serve para criar a ligação no banco criado pelo sequelize, tendo dados relacionados
.sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))