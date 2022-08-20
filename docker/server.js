const express = require ('express')

const PORT = 8080;
const HOST = 'localhost';

const app = express();
app.get('/', (req,res) => {
    res.send ('Hello Docker user')
})

app.listen(PORT, HOST);
console.log (`Running on https://${HOST}:${PORT}`);