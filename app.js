
/*
**	fs module
**	http://nodejs.org/api/fs.html
**	file system.
*/
const { json } = require('express');
const express = require('express');
const app = express();
const PORT = 1000;
const fs = require('fs')
var dbFile = 'db.json'
var dbDataBuffer = fs.readFileSync(dbFile)
var dbJSON = dbDataBuffer.toString()
// use도 http method???
app.use(express.json())
// JSON.parse() 메서드는 json문자열의 구문 분석 결과를 javascript 값이나 객체 생성
const data = JSON.parse(dbJSON) 
function dbSync() {
	fs.writeFileSync(dbFile, dbJSON);
}



app.get('/', (req, res) => {
	console.log('GET\t/');
	res.send('HELLo World!');
});

/*
**	GET /todos/
*/

app.get('/todos/', (req, res) => {
	//console.log('GET\t/todos/');
	res.json(dbJSON);
});

/*
** POST /todos/
*/

app.post('/todos/:content', (req, res) => {
	let content = req.params
	console.log('content')
	res.send(dbJSON)
	console.log('POST\t/todos/');
	// dbJSON.content ='종강하기'
	// var content = req.body.content
	// var id = req.body.id
	// var completed = req.body.completed
})
	// Implement this!


/*
**	PATCH /todos/:todo_id
*/

app.patch('/todos/:todo_id', (req, res) => {
	console.log('PATCH\t/todos/');
	res.send(req.params.todo_id + ' Implement this!');
	// Implement this!
});

/*
**	DELETE /todos/:todo_id
*/

app.delete('/todos/:todo_id', (req, res) => {
	console.log('DELETE\t/todos/');
	res.send(req.params.todo_id + ' Implement this!');
	// Implement this!
});

app.listen(PORT, () => {
	console.log('Something behind... you have to implement this...!');
	console.log(`Server is running and listening on port ${PORT}!`);
});

