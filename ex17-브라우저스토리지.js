import { setItem,getItem,removeItem } from "./cookie";

// BOM : Browser Object Model
// ㄴ window.
// 브라우저 스토리지
// *주의 : 기밀한(예민한) 정보들은 암호화를 하거나 저장하지 않는다
// ㄴ cookie 만료기간 또는 secure 설정 등을 통해서 데이터의 보안을 관리

import { getItem, removeItem, setItem } from "./cookie";

// 1) local storage
// ㄴ 브라우저를 종료하더라도 사용자 pc에 계속 남아있다.
window.localStorage

// 문제)
// Todo list 예제에서 list 배열을 활용하여,
// 브라우저를 새로고침 하거나, 
// 완전 종료 후, 로드했을 때에도 데이터를 유지하도록 만들기

// 각 li에 삭제 버튼도 추가
// removeElement() 메소드를 활용해서 삭제 기능 추가
// 부모 노드 참조 : parentNode


// localStorage.setItem(문자열, 문자열)
// key : todo-data
// value : ?

const list = [
    {
        username: "홍길동",
        age: 30
    },
    {
        username: "홍길동",
        age: 10000
    }
];


localStorage.setItem("sample", JASON.stringfy(list));
const sample = localStorage.getItem("sample");

console.log(localStorage.getItem("sample"));
console.log(typeof sample);

const result = JSON.parse(sample);
console.log(result);
console.log(typeof result);

// 2) session storage
// ㄴ 브라우저를 종료하면 삭제된다.

// 3) cookie
// ㄴ 만료기간을 설정할 수 있음
// ㄴ max-age 사용 : 초 단위로 만료 기간을 설정(expires 와 함께 사용하는 경우, max-age가 우선 적용됨)
// ㄴ expire 사용 : 국제 표준시간 UTC 문자열로 설정
const now = new Date();
const goal = new Date(now.getTime() + 5000);

// 데이터 저장(기본 경로 / 빈 패스 즉, root 경로 라고 함)
document.cookie = `username=허성원, path=/; max-age=3600;`;
document.cookie = `email=hurdang99@naver.com, path=/;expires=${goal.toUTCString()};`;

console.log(now);
console.log(now.toDateString());
console.log(now.toISOString());
console.log(now.toJSON());
console.log(now.toLocaleDateString());
console.log(now.toLocaleString());
console.log(now.toLocaleTimeString());
console.log(now.toString());
console.log(now.toTimeString());
console.log(now.toUTCString());     // expires 값으로 UTC 문자열을 담아줘야함


// document.cookie
// String 타입의 데이터를 반환
// name=value; name2=value2; ...

// 값을 얻으려면 문자열로부터 직접 파싱하여 데이터를 가져옴

// 만들어둔 메소드 호출하여 테스트 하기
setItem(username,dooly,5000);
getItem();
removeItem();
