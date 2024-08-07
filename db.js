const mongoose = require('mongoose');

const mongoURL = 'mongodb://127.0.0.1:27017/hotel'

mongoose.connect(mongoURL)

   const db = mongoose.connection;

   db.on('connected',() => {
    console.log('connect to mongoDB server')
   })

   db.on('error',() => {
    console.log('mongoDB connetion error')
   })

   db.on('disconnected',() => {
    console.log('mongoDB server disconneted')
   })


   module.exports = db;