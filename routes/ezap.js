
const express = require('express')
const bodyparser = require('body-parser')
const mysql = require('mysql')
const app = express ()



// Mysql

const pool = mysql.createpool({

	connectionlimit : 10,
	host : '127.0.0.1',
	user : 'root',
	password : '',
	database : 'netx'

})


app.get('',(req, res) => {

pool.get.connection((err, connection) => {

	if(err) throw err

		console.log('connected as id ${connection,threadId}')

connection.query('SELECT * FROM customers', (error, rows) =>  {

	connection.release()

	if (!err) {

		res.send(rows)

	}	else {

		console.log(err)
	}



})

})






})

app.listen(port,() => console.log('listen on port ${port}'))