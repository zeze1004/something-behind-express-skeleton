const { json } = require('express')
const express = require('express')
const app = express()

const server = app.listen(3000, () => { // app.listen(포트번호, 콜백함수 정의)
    console.log('start server: localhost:3000')
})
app.set('/', __dirname + '/views') // 다른 파일 가져오기
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile) // html -> ejs

// 클라이언트(웹 브라우저)가 response 받아 user에게 띄울 수 있는 get
app.get('/', function (req, res) { // app.get('라우터')
    res.render('index.html') // rendering
})
app.get('/about', function (req, res) {
    res.render('about.html')
})
// 디비 연결
var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'example.org',
  user            : 'bob',
  password        : 'secret',
  database        : 'my_db'
});
    
app.get('/db', function (req, res) {
    pool.getConnection(function(err, connection) {
    if (err) {throw err;} // not connected!

    // Use the connection
    connection.query('SELECT * FROM test', function (error, results, fields) {
        res.send(json.stringify(results))
        // When done with the connection, release it.
        connection.release();

        // Handle error after the release.
        if (error) throw error;

        // Don't use the connection here, it has been returned to the pool.
        });
    });
})