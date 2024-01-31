const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.json({
        mesg: 'Hello Backend - update 2 - new branch' // test
    })
})

app.listen(3000)
