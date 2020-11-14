const express = require('express')
const app = express()
const uuidAPIkey = require('uuid-apikey') // api 키를 db에서 관리
const server = app.listen(3001, () =>{
    console.log('start server: localhost: 3001')
})

console.log(uuidAPIkey.create())
const key = { // db가 없으므로 변수로 관리
    apiKey: 'W72TTDJ-3WVMJB3-KSV56ES-7DD5G6X', 
    uuid: 'e1c5ad36-1f37-492c-9e76-533b3b5a581b'
}

app.get('/api/users/:apikey/:type', async (req, res) => { // :이 있는 paht는 어떤 값이든 받을 수 있다
    let {
        apiKey,
        type
    } = req.params
    console.log(type)
    if(type == 'seoul') {
        let data = [
            // 예) 디비에 있는 서울새럼 정보
            {
                name:"홍길동" , 
                city: "seoul",
            },
            {
                name:"홍길순" ,
                city: "seoul",
            }
        ]
        res.send(data)
    } else if(type == 'jeju') {
        let data = [
            // 디비에 있는 서울새럼 정보
            {
                name:"뾰로롱" , 
                city: "jeju"
            },
            {
                name:"큐큐큐" , 
                city: "jeju"
            }
        ]
        res.send(data)
    } else {
        res.send('type is not correct')
    }
})