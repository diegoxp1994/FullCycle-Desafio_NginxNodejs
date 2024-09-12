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

const create_table = 'CREATE TABLE IF NOT EXISTS people (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, name varchar(255) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8;'
connection.query(create_table)

const sql = `INSERT INTO people(name) values ('Diego')`
connection.query(sql)

const select = 'SELECT name FROM people'
let list = ''
connection.query(select, (_err, result, _) => {
  let i
  for (i = 0; i < result.length; i++) {
    list += '<li>' + result[i].name + '</li>'
  }
})
connection.end()

app.get('/', (_req, res) => {
  let html = '<h1>Full Cycle Rocks!</h1></br>'
  html += '<ul>'
  html += list
  html += '</ul>'
  res.send(html)
})

app.listen(port, () => {
  console.log('Rodando na porta ', port)
})
