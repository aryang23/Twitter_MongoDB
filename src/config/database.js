const mongoose = require('mongoose');

const connect = async () => {
    console.log("COnnecting");
    await mongoose.connect('mongodb://127.0.0.1/twitter_Dev');
    console.log("Server connected");
}

module.exports = connect;