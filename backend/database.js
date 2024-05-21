const mongoose = require("mongoose");

const connectDataBase = () => {
    mongoose.connect(process.env.DB_URL)
    .then((data)=>{
        console.log(`database connected with ${data.connection.host}`);
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = connectDataBase