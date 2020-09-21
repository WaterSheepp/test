'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = Schema({
    user_name: {type: String, require: true},
    name: String,
    sur_name: String,
    password: {type: String, require: true},
    carnet: String,
    rol: {type: String, require: true},
});

module.exports = mongoose.model('user', schema)

