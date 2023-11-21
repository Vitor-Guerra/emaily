const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send({
        bye: 'buddy'
    });
})

const PORT = process.env.PORT || 5000; //injeção do Heroku de variavel de ambiente ou defina 5000 senão tiver
app.listen(PORT)