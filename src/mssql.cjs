const dotenv = require('dotenv').config({ path: '.env' })
const sql = require('mssql/msnodesqlv8')
const mssql = require('mssql');


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

async function getEmployees() {
  sql.connect(config).then(pool => {
    pool.query(`select * from ${process.env.MSSQL_TABLE}`)
      .then(result => console.log(result.recordset))
  })
}

mssql.connect(config, error => {
  if (error) console.log(error)
  mssql.query(`Select * from ${process.env.MSSQL_TABLE}`, (err, dataset) => {
    if (err) console.log(err)
    // if (dataset) console.dir(dataset);
    mssql.close();
  });
})

mssql.on('error', err => {
  console.log(err);
});

getEmployees()