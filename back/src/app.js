'use strict'

var CORS = require('cors')

const express = require("express")
const app = express();
const bodyParser = require("body-parser")

var user_routes = require ( "./routes/userRoutes" )

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())


app.use(CORS())

app.use( '/api', user_routes)


module.exports = app;