const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'Password@123',
    database: 'nodedb'
})

const sql = `INSERT INTO people(NAME) values('Diego')`
connection.query(sql)
connection.end()

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle Rocks!</h1>')
})

app.listen(port, ()=> {
    console.log('Rodando na porta: ' + port)
})