var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();
// open 메소드를 이용해 새로운 요청을 만듦
request.open('GET', requestURL); // 데이터 가져오는 메소드
// 서버가 JSON 데이터 반환
request.responseType = 'json';
request.send(); // send() 이용해 요청 보내기
// 서버의 응답 기다리고 처리하는 섹션
request.onload = function() {
    var superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
  }
