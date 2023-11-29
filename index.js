const express = require('express')
const db = require('./database')

const app = express()

app.get('/comment', function(req, res){
    let result = db.raw('select * from public.comment')
    return res.json(result)
})
app.listen(3000, ()=>{
    console.log('done')
})