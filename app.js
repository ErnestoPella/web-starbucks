require('dotenv').config();
const express = require('express')
const app = express()

const port = process.env.PORT;

app.use(express.static('public'))

app.get('*', (req, res) => {
  res.send('404 | Page not found')
});

app.listen(port,() =>{
  
})