
/*
**	fs module
**	http://nodejs.org/api/fs.html
**	file system.
*/

const { Console, error } = require('console');
const { json } = require('express');
const express = require('express');
const app = express();
const PORT = 1000;
const fs = require('fs')
var dbFile = 'db.json'
var dbDataBuffer = fs.readFileSync(dbFile)
var dbJSON = dbDataBuffer.toString()

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
	res.json(data);
});

/*
** POST /todos/
*/

app.post('/todos/:content', (req, res) => {
	let {
		content
	} = req.params
	var result = {}
	// i = dbJSON.todos의 key 개수
	// const i = Object.keys(data.todos).length
	const i = data.todos.length
	data.todos[i] = {
		"id" : i+1,
		"content" : content,
		"completed" : false
	}
	fs.writeFileSync(dbFile,JSON.stringify(data)); // dbJSON에 기록
	result["success"] = 1; 
	result["todos"] = data.todos[i]
	res.send(result)
	console.log('POST\t/todos/');
})

/*
**	PATCH /todos/:todo_id
*/

app.patch('/todos/:todo_id', (req, res) => {
	let {
		todo_id 
	} = req.params
	req.body = data
	console.log('PATCH\t/todos/');

	for(var i in data.todos) {
		// console.log(data.todos[i].id)
		if(todo_id == data.todos[i].id) {
			console.log(data.todos[i])
			res.send(data.todos[i])
		} 
	} res.send('없는 id입니다')
});

/*
**	DELETE /todos/:todo_id
*/

app.delete('/todos/:todo_id', (req, res) => {
	console.log('DELETE\t/todos/');
	let {
		todo_id 
	} = req.params
	req.body = data

	for(var i in data.todos) {
		// console.log(data.todos[i].id)
		if(todo_id == data.todos[i].id) {
			delete data.todos[i]
			res.send({
				"success" : true
			})
		} 
	} res.send('없는 id입니다')
});

app.listen(PORT, () => {
	console.log('Something behind... you have to implement this...!');
	console.log(`Server is running and listening on port ${PORT}!`);
});

