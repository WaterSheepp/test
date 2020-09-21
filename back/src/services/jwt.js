'use strict'

var jwt = require("jwt-simple")
var moment = require("moment")
var secret = 'password'

exports.createToken = function (user){
    var payload = {
        sub: user._id,
        usuario: user.user_name,
        surname: user.sur_name,
        carnet: user.carnet,
        rol: user.rol,
        iat: moment().unix(),
        exp: moment().day(30, 'days').unix()
    }

    return jwt.encode(payload, secret)
}