'use strict'

var express = require( "express" )
var md_auth = require( "../middleware/auth" )
var userController = require( "../controllers/userController" )

var api = express.Router()

api.post( '/login', userController.loginUser )
api.post( '/addUser', md_auth.ensureAuth, userController.addUser ) 
api.post( '/editUser', md_auth.ensureAuth, userController.editUser)
api.get( '/getUsers', userController.viewUser)

module.exports = api