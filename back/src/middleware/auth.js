"use strict";

const jwt = require("jwt-simple");
const moment = require("moment");

const secret = "password";

exports.ensureAuth = function (req, res, next) {
  
  if (!req.headers.authorization) {
      
    return res.status(403).send({ message: "authentication header is not there" });
    
  } else {

    var token = req.headers.authorization.replace(/['"]+/g, "");

    try {

      var payload = jwt.decode(token, secret);
      if (payload.exp <= moment.unix) {

        return res.status(404).send({ message: "token expired" });

      }
    } catch (ex) {
      
      return res.status(404).send({ message: "invalid token" });
    }

    req.user = payload;
    next();
  }
};