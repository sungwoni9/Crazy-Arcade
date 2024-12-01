// "이벤트 핸들러"와 "이벤트 리스너"로 
// 브라우저를 포함한 문서상에서 발생한 이벤트를 처리할 수 있음

// 1. 이벤트 핸들러
// ㄴ html 태그 인라인으로 on + 이벤트명 속성에 실행할 JS 문장을 작성
// ㄴ 간단한 조작일 경우에 사용

// 2. 이벤트 리스너
// ㄴ 자바 스크립트를 통한 이벤트의 조작(대부분의 이벤트 처리 방법)
// ㄴ 엘리먼트.addEventListener("이벤트명",이벤트핸들함수)

window.onload = () => {
    const title = document.getElementById("title");
    title.addEventListener("click", event => {          // 감지기
        console.log("click!");
    });
}

// 1) keyEvent.props
// ㄴ keydown : 윈도우에 포커스 된 상태에서 키보드의 키가 눌리는 이벤트
// window.addEventListener("keydown", e => {
// console.log(e.key);     // keyEvent.key : 키의 값
// console.log(e.code);    //    
// console.log(e.repeat);  //
// });

// DragEvent

// 1) dragstart: 드래그 시작 시 발생.
window.addEventListener("dragstart", e => {
    console.log(e.clientX);    // 시작 위치의 X 좌표
    console.log(e.clientY);    // 시작 위치의 Y 좌표
    console.log(e.target);     // 드래그된 요소
    console.log(e.dataTransfer);  // 드래그된 데이터의 정보를 포함하는 객체
});

// 2) drag: 드래그 중에 발생.
window.addEventListener("drag", e => {
    console.log(e.clientX);  
    console.log(e.clientY);   
    console.log(e.target);     
    console.log("아아아");
});

// 3) dragend: 드래그가 끝날 때 발생.
window.addEventListener("dragend", e => {
    console.log(e.clientX);    
    console.log(e.clientY);   
    console.log(e.target);    
});

// 4) dragleave: 드래그된 요소가 놓기 대상에서 벗어날 때 발생.
window.addEventListener("dragleave", e => {
    console.log(e.clientX);  
    console.log(e.clientY);   
    console.log(e.target);   
});

// 5) dragover: 드래그 중에 마우스 포인터가 놓기 대상 위에 있을 때 지속적으로 발생.
window.addEventListener("dragover", e => {
    console.log(e.clientX);    
    console.log(e.clientY);    
    console.log(e.target);    
});

// 6) drop: 드래그된 요소가 놓기 대상에 놓였을 때 발생.
window.addEventListener("drop", e => {
    e.preventDefault();  // 기본 동작을 방지하여 드롭이 가능하게 만듬
    console.log(e.clientX);  
    console.log(e.clientY);  
    console.log(e.target);   
    const draggedData = e.dataTransfer.getData("text");
    console.log("Dropped data:", draggedData); // 드래그된 데이터
});


 // 1) focus: 요소가 포커스를 받을 때 발생
 window.addEventListener("focus", e => {
    console.log("Focus event triggered");
    console.log("Target:", e.target);
}, true);  // true: capture phase에서 처리

// 2) focusin: 자식 요소가 포커스를 받으면 부모까지 전달됨
window.addEventListener("focusin", e => {
    console.log("Focusin event triggered");
    console.log("Target:", e.target);
}, true);

// 3) focusout: 요소가 포커스를 잃을 때 발생
window.addEventListener("focusout", e => {
    console.log("Focusout event triggered");
    console.log("Target:", e.target);
}, true);

// 버튼 클릭 시 입력 필드에 포커스를 설정하는 예시
focusButton.addEventListener("click", () => {
    inputField.focus();  // 버튼 클릭 시 input에 포커스
});

// Div에 포커스를 받을 때
focusDiv.addEventListener("focus", e => {
    console.log("Div got focus");
    console.log("Target:", e.target);
});

// Div에 포커스가 들어가면 focusin이 발생
focusDiv.addEventListener("focusin", e => {
    console.log("Div received focusin");
    console.log("Target:", e.target);
});

// Div에서 포커스를 잃을 때
focusDiv.addEventListener("focusout", e => {
    console.log("Div lost focusout");
    console.log("Target:", e.target);
});

let preScrollTop = 0;
let nextScrollTop = 0;

window.addEventListener('wheel',(e) => {
    let wheel = e.wheelDataY;

    if(wheel >= 0){
        console.log('UP!');
    } else {
        console.log('DOWN!');
    }

    preScrollTop = nextScrollTop;
});






















