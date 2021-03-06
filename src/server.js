const express = require('express')
const ejs = require('ejs')
const path = require('path')
const cookie = require('cookie-parser')
const { host, PORT } = require('./config.js')
const app = express()

const auth = require("./middlewares/auth.js")
// setting template engine
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))

// third-party and build-in middlewares
app.use( cookie() )
app.use( express.static(path.join(__dirname, 'assets')) )
app.use( express.urlencoded({ extended: true }) )
app.use( auth )
// load modules
const modules = require('./modules')
app.use( modules )





app.listen(PORT, () => console.log('http://localhost:' + PORT))