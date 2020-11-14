const express = require('express')
const app = express()

const server = app.listen(3000, () => { // app.listen(포트번호, 콜백함수 정의)
    console.log('start server: localhost:3000')
    app.set('/', __dirname + '/views') // 다른 파일 가져오기
    app.set('view engine', 'ejs')
    app.engine('html', require('ejs').renderFile)

    // 클라이언트(웹 브라우저)가 response 받아 user에게 띄울 수 있는 get
    app.get('/', function (req, res) { // app.get('라우터')
        res.render('index.html') // rendering
    })
    app.get('/about', function (req, res) {
        res.render('about.html')
    })

    
})