const express = require('express');
const app = express();


const config = require('./config/config.js')


app.get('/', (req,res)=>{
    console.log('its works')
   res.send('Hello from here')
    
})

app.listen(config.PORT, ()=> console.log(`Server start at port ${config.PORT}`))