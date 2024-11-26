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

// substring(문자열) : 시작 지점과 끝 지점의 값을 리턴
console.log(str.substring(2,3));

// repeat(문자열) : 인자값만큼 반복하는 횟수를 가진 값을 리턴
console.log(str.repeat(2));

// trim(문자열) : 공백을 제거 후 값을 리턴
console.log(str.trim);

// 
console.log(str.);
console.log()
console.log()
console.log()
console.log()
