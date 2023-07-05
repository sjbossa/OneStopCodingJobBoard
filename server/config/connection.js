const mongoose = require('mongoose');
//TODO: FIX CONNECTION
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/OneStopCoding'
);

module.exports = mongoose.connection;