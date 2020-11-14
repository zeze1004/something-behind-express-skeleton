const express = require('express')
const app = express()
const server = app.listen(3001, () =>{
    console.log('start server: localhost: 3001')
})

app.get('/api/users/:type', async (req, res) => { // :이 있는 paht는 어떤 값이든 받을 수 있다
    let {type} = req.params
    console.log(type)
    res.send('ok')
    // /api/users/1 이라고 주소창에 쳤을 시 type = 1, 콘솔창에 1 출력, 클라이언트 창에 ok 출력
})