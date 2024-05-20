const app = require('express')();

const mysql = require('mysql2');


// config
const config = {
    host: '127.0.0.1',
    user: 'sanchez',
    password: 'astroworld',
    database: 'schooldb',
    waitForConnections: true,
    connectionLimit: 1,
    maxIdle: 1, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
  }

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool(config).promise()
// pool.query('select * from students').then(result => console.log(result))

async function getStudents(){
    const con = mysql.createConnection(config).promise()
    const result = await con.query('select * from students ')
    console.log(result)
}

// getStudents()

(async () => {
    const student = await pool.query('select * from students where student_id = ?',[1])
    console.log(student)
});

app.get('/:id',async (req,res,next) => {
    const id = req.params.id
    const student = await pool.query('select * from students where student_id = ?',[id])
    if (student) res.send(student[0][0])
    res.end()
    next()
})

/*
pool.getConnection(function(err, connection) {
    if (err) throw err; // not connected!

    // Use the connection
    connection.query('SELECT * FROM students', function (error, results, fields) {
        // if (results) console.log(results);
            
        // When done with the connection, release it.
        // connection.close();

        // Handle error after the release.
        if (error) throw error;

        // Don't use the connection here, it has been returned to the pool.
    });

    connection.query('SELECT * FROM students', function (error, results, fields) {
        // if (results) console.log(results);
        // connection.close();
        if (error) throw error;
    })
    pool.end()
}); */

app.listen(3000,() => console.log("server listening on port 3000....."))