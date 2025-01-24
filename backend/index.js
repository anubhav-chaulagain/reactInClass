const express = require("express");
const { connection } =  require('./database/db');

const { Users } = require('./models/userSchema')

const app = express();

app.get('/', (req, res) => {
    res.send("HII");
})


const PORT = 3000;
app.listen(PORT, ()=>{console.log(`Server is running on port: ${PORT}`)}
);

connection()

