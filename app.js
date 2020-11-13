
/*
**	fs module
**	http://nodejs.org/api/fs.html
**	file system.
*/
const fs = require('fs')
var dbFile = 'db.json'
var dbDataBuffer = fs.readFileSync(dbFile)
var dbJSON = dbDataBuffer.toString()
// use도 http method???
app.use(express.json())
// JSON.parse() 메서드는 json문자열의 구문 분석 결과를 javascript 값이나 객체 생성

function dbSync() {
	fs.writeFileSync(dbFile, dbJSON);
}

const express = require('express');
const app = express();
const PORT = 1004;

app.get('/', (req, res) => {
	console.log('GET\t/');
	res.send('HELLo World!');
});

/*
**	GET /todos/
*/

app.get('/todos/', (req, res) => {
	console.log('GET\t/todos/');
	res.json(dbJSON);
});

/*
** POST /todos/
*/

app.post('/todos/', (req, res) => {
	console.log('POST\t/todos/');
	res.send('Implement this!');
	// Implement this!
});

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

// onload() 테스트
var xmlhttp = new XMLHttpRequest(),
  method = 'GET',
  url = 'https://developer.mozilla.org/';

xmlhttp.open(method, url, true);
xmlhttp.onload = function () {
  // Do something with the retrieved data ( found in xmlhttp.response )
};
xmlhttp.send();