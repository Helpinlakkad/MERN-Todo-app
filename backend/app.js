const express = require("express");
const connectDataBase = require("./database");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

dotenv.config({path: './config.env'});

connectDataBase();

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`Srver is Running on http://localhost:${port}}`);
})

const text = require("./routes/todoRoute");

app.use('/api/v1',text);


