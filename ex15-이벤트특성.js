const checkImg = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNV3bAT-Obnno05IQpAV5o7OhH7hiueQ55Hg&s",
    "https://www.svgrepo.com/show/169312/check-mark.svg"
];

class Todo {
    constructor(text, isCompleted = false) {
        this.text = text;
        this.isCompleted = isCompleted;
    }
}

window.onload = () => {
    // 배열로 todo 상태 관리
    const list = [];

    // 주요 DOM 요소 가져오기
    const todoList = document.getElementById("todo-list");
    const ul = document.querySelector("ul");

    // ul 클릭 이벤트 (이벤트 위임)
    ul.addEventListener("click", e => {
        const target = e.target;

        // 체크박스 클릭 시 알림
        if (target.type === "checkbox") {
            if (target.checked) {
                alert("완료된 작업으로 수정");
            } else {
                alert("미완료된 작업으로 수정");
            }
        }
    });

    // todoList 클릭 이벤트 (저장 버튼 처리)
    todoList.addEventListener("click", e => {
        const target = e.target;

        // 저장 버튼 클릭 시 처리
        if (target.tagName === "BUTTON" && target.id === "save") {
            alert("저장 완료");
        }
    });
};
