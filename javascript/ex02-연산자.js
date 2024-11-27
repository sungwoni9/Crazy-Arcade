// 1) 산술연산자 + - * /
// 2) 비교연산자 === !== > < >= <=
// ㄴ 자바스크립트에서는 완전항등연산자를 사용하여 같고 다름을 비교
// ㄴ 값과 자료형
// 3) 논리연산자 && || !
// 4) 대입연산자 =
// 5) 삼항연산 사용 가능

let num1 = 3;
let num2 = 10;
console.log("Node.js 실행 테스트");
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);

let num3 = 3;
let num4 = '3';
console.log(num3 == num4);      // true 항등 연산자는 지양할 것
console.log(num3 === num4);     // flase

console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(num1 !== num2);

console.log(num1 <num2 && num1 === num2);
console.log(num1 <num2 || num1 === num2);


