
const express = require('express')
const request = require('request');
const path = require('path')
const api = require('./routes/api.js')


const app = express()

app.use(express.static(path.join(__dirname, 'dist')))//well find the index
app.use('/', api)

const port = 3005
app.listen(port, function(){
    console.log(`Running server on port ${port}`)

})








    
  

    






