// 문자열 : 문자의 배열
// ㄴ 문자열 또한 index가 존재한다


let str = 'hello world';
let str2 = 'hello world';
let str3 = 'hello';

console.log(str === str2);
console.log(str2 === str3);

// charAt(인덱스) : 해당 위치의 캐릭터 한 개를 반환  
console.log(str.charAt(1));

// charCodeAt(인덱스) : 
console.log(str.charCodeAt(1));

// concat(문자열) : 문자열 + 문자열 확장한 결과를 새롭게 리턴
console.log(str.concat('!'))
console.log(str)

// endsWith(문자열) : 인자값으로 넘긴 문자열로 끝나는지 여부 리턴
console.log(str.endsWith('!'));
console.log(str.endsWith('d'));

// includes(문자열) : 인자값으로 넘긴 문자열이 존재하는지 여부 리턴(두 번째 인자를 지정하면, 위치까지 일치하는지)
console.log(str.includes('hello'));
console.log(str.includes('apple'));

// lastIndexOf(문자열) : 해당 문자열을 숫자만큼 반복
console.log(str.lastIndexOf('lo'));

// substring(인덱스) : 시작 지점과 끝 지점 까지의 값을 리턴
console.log(str.substring(2,3));

// repeat(인덱스) : 인자값만큼 반복하는 횟수를 가진 값을 리턴
console.log(str.repeat(2));

// trim(문자열) : 공백을 제거 후 값을 리턴
console.log(str.trim);

// toUpperCase(문자열) : 문자열을 대문자로 변환한 결과를 리턴
console.log(str.toUpperCase()); // "HELLO WORLD"

// toLowerCase(문자열) : 문자열을 소문자로 변환한 결과를 리턴
console.log(str.toLowerCase()); // "hello world"

// startsWith(문자열) : 인자값으로 넘긴 문자열로 시작하는지 여부 리턴
console.log(str.startsWith('hello')); // true
console.log(str.startsWith('world')); // false

// slice(시작 인덱스, 종료 인덱스) : 문자열의 특정 부분을 추출하여 새 문자열을 리턴
console.log(str.slice(0, 5)); // "hello"
console.log(str.slice(6)); // "world"

// indexOf(문자열) : 문자열에서 특정 값의 첫 번째 위치를 리턴
console.log(str.indexOf('o')); // 4
console.log(str.indexOf('z')); // -1 (존재하지 않으면 -1 반환)

// split(구분자) : 문자열을 구분자를 기준으로 나누어 배열로 리턴

// replace(문자열1, 문자열2) : 특정 문자열을 다른 문자열로 교체
console.log(str.replace('world', 'everyone')); // "hello everyone"

// replaceAll(문자열1, 문자열2) : 특정 문자열을 모두 다른 문자열로 교체
console.log("hello hello".replaceAll('hello', 'hi')); // "hi hi"

// padEnd(길이, 채울 문자열) : 문자열의 끝을 특정 길이만큼 채움
console.log(str.padEnd(15, '*')); // "hello world****"

// length : 문자열의 길이를 반환
console.log(str.length); // 11

// valueOf() 문자열의 실제 값을 가져와 줌
// ㄴ 동적으로 문자열이 생성될 때 비교 단계에서 필요

const test = new String('hello');
console.log(str3 === test);
console.log(str3.valueOf() === test.valueOf());

// split(구분자) : 구분자 문자열을 기준으로 문자열을 잘래내준 결과물
str = "가/나/다";
const result = str.split('/');
console.log(result);

// match() & test()
// ㄴ 정규식을 활용한 문자열 비교

// 정규식 문자열의 선언과 초기화
let regex = /abc/;
str = "abc";

result = str.match("abc");
console.log(result);

result = str.match(regex);
console.log(result);







