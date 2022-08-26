const mongoose = require('mongoose');

const connectDB = () =>{
    mongoose.connect(process.env.DB_LOCAL_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(con =>{
        console.log(`MongoDb database connected with host successfully`)
    })
}

module.exports = connectDB;