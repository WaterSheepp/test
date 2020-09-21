'use strict'

const mongoose = require("mongoose")
const app = require("./app")
const credentials = require("./controllers/userController")

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/library', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log('database access granted');
    credentials.createAdmin();

    app.set('port', process.env.PORT || 3000) 
    app.listen(app.get('port'), ()=>{
        console.log(`server running on port: ${app.get('port')}`);
    })

}).catch(err => console.log(err))
