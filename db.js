const mongoose = require('mongoose');

// const mongoURL = process.env.MONGODB_URL_LOCAL;

const mongoURL = process.env.MONGODB_URL;

if (!mongoURL) {
   console.error('MongoDB connection URL is not defined.');
   process.exit(1);
}

mongoose.connect(mongoURL);

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