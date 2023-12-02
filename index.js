const express = require('express')

const db = require('./database')
const comment = require('./comment')

const app = express()

app.post('/comment', async function(req, res){
    try {
        await comment.create({
            id: 1,
            name: req.body.name,
            email: req.body.email,
            propic: '',
            create_at:  new Date(),
            description: req.body.description
        })
        res.send({
            message: 'Data berhasil ditambahkan'
        })
    } catch (error) {
        return res.status(500).send({
            message: 'Data gagal ditambahkan'
        })
    }
    
})
app.listen(3000, async()=> {
    console.log('done')
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})