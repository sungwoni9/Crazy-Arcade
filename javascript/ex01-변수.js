// 주석 : 실행되지 않는 문장


func();

// 출력
console.log('hello word');

console.log(data);         // var         : undifined   
console.log(number);       // Let / const : Uncaught ReferenceError: number is not defined

// vs code의 확장앱 code runner로 터미널에서 파일 실행
//  ctrl + R

// var(Legasy), let, const

// 변수 선언과 초기화
// ㄴ 변수키워드 변수명 = 값;
var data = 10;

//  변수의 타입은 값이 초기화될 때 정해짐
// ㄴ 어떤 타입이든 모두 담을 수 있음
console.log(typeof data);

// Let(변수) & const(상수)
// 변수 : 값을 변경할 수 있음
// 상수 : 값을 변경할 수 없음

let number = 10;
number = 100;
console.log(number);

const username = '홍길동';
console.log(username);
username = '홍둘리';
console.log(username);

// var 타입을 사용하지 않는 이유
// ㄴ hoisting 문제
// ㄴ 선언된 var 변수가 전역에서 참조가 가능함
// ㄴ 해당 값이 참조될 수 없는, 원치 않는 위치에서 가져올 수 있음

function func() {
    // console.log(data + 1);
    // console.log(number+1);
    var sample ='sample';
}
console.log(sample);