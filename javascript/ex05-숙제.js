// 문제)
// 이메일 주소에 대한 검증 로직 작성하기
// ㄴ 정규식을 활용해서 
// ㄴ match() 와 test() 호출 후 결과 출력
// ㄴ 1) 유효한 이메일 입니다.
// ㄴ 2) 유효하지 않은 이메일 입니다.

// apple@domain.com
// 1) 유저네임 패턴은 숫자와 영문자 대소문자와 특수문자 ._ % + - 가 최소 한 개 이상
// 2) 도메인의 패턴은 숫자와 영문자 대소문자와 특수문자 .-가 최소 한 개 이상
// 3) 접미사 패턴은 영문자 , 대소문자가 두 개 이상 
// .닷은 와일드카드와 겹치기 때문에 \. 이스케이프 문자로 처리해야 한다.

// class[패턴열거]

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const email = 'apple@domain.com';

// match() 사용
const result = email.match(regex);
console.log(result); 

// test() 사용
const isValid = regex.test(email);
console.log(isValid);  

// 결과 출력
if (result) {
    console.log('유효한 이메일 입니다.');
} else {
    console.log('유효하지 않은 이메일 입니다.');
}