const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const dotenv = require('dotenv').config({ path: 'C:\\Users\\sfspl\\VScode\\overdue-payments\\.env' })
const sql = require('mssql/msnodesqlv8')
// const mssql = require('mssql')
app.use(cors({ origin: '*' }));
app.use(bodyParser.json())

const config = {
    user: process.env.MSSQL_USER,
    password: process.env.MSSQL_PASS,
    database: process.env.MSSQL_DB,
    server: process.env.MSSQL_SERVER,
    // driver: process.env.MSSQL_DRIVER,
    port: parseInt(process.env.MSSQL_PORT),
    pool: { max: 10, min: 0, idleTimeoutMillis: 30000 },
    options: {
        trustServerCertificate: true, // change to true for local dev / self-signed certs
    }
}

async function getCustomers() {
    console.log(config)
    return await sql.connect(config)
        .then(pool => pool.query(`select * from ${process.env.MSSQL_TABLE}`))
        .then(customers => customers.recordset)
}

async function writeReason(id, reason) {
    sql.connect(config)
        .then(pool => pool.query(`update ${process.env.MSSQL_TABLE} set reason = '${reason}' where cust_id = ${id}`))
    // .then(response => console.log(response))
}

app.post('/login', (req, res) => {
    console.log(req.body)
    res.status(200).redirect('http://localhost:3000/')
})

app.get('/form', async (req, res) => {
    // getCustomers();
    res.send(getCustomers())
    res.end()
})

app.post('/', (req, res) => {
    const requestData = req.body; // Correct variable name
    const custKeys = Object.keys(requestData).filter(key => key.startsWith('cust_'));
    for (let i = 0; i < custKeys.length; i++) {
        writeReason(parseInt(custKeys[i].substring(5), 10), requestData[custKeys[i]])
    }
    res.json({ message: 'POST request received successfully' })
})



app.listen(5000, () => { console.log("listening on port 5000....") })
