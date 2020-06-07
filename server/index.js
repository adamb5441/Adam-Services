const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const EmailController = require('./EmailController')
const bodyparser = require ('body-parser');
OutsSideController = require('./OutsideController')
const https = require('https')
app.use(bodyparser.json())
require('dotenv').config()
const { auth } = require('express-openid-connect');

const AuthConfig = {
  required: false,
  auth0Logout: true,
  appSession: {
    secret: process.env.secret
  },
  baseURL: 'http://localhost:3000',
  clientID: process.env.ClientId,
  issuerBaseURL: process.env.authUrl
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(AuthConfig));

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)
  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  // app.get('/', (req, res) => {
  //   res.send(req.isAuthenticated() ? 'Logged in' : 'Logged out');
  // });
  app.post("/status", EmailController.contactEmail)
  app.post("/api/getJSON", OutsSideController.getJSON)
  app.post("/api/postJSON", OutsSideController.sendJSON)
  // Give nuxt middleware to express
  app.use(nuxt.render)

  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })


}
start()
