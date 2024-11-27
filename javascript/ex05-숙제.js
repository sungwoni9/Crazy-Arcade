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