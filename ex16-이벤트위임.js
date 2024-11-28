class Todo {
    // 사용을 할 때에는 마치 속성값을 초기화 하거나 얻는 것 처럼 사용을 함
    #isDone;
    #content;

    constructor(content, isDone) {
        this.#content = content;
        this.#isDone = isDone;
    }

    get getIsDone() {
        return this.#isDone;
    }

    set setIsDone(isDone) {
        this.#isDone = isDone;
    }

    getContent() {
        return this.#content;
    }
}

window.onload = () => {
    // 이벤트 위임 Event Delegation 
    // ㄴ 버블링 활용한 이벤트의 위임 처리

    // 1. 체크 박스에 클릭 이벤트가 발생하면 -> 완료/미완료 메세지를 alert()
    // 2. 저장 버튼을 누르면 
    // ㄴ 배열에 저장된 todo의 상태를 element로 반영
    // ㄴ 추가된 todo가 있으면 배열에 추가 및 element로 반영
    // 3. class Todo 정의하여 관리 

    const list = [];

    const todoList = document.getElementById("todo-list");
    const ul = todoList.querySelector("ul");
    const save = todoList.querySelector("#save");

    ul.addEventListener("click", e => {
        const target = e.target;

        if (target.type === "checkbox") {
            if (target.checked) {
                alert("완료된 작업으로 수정");
            } else {
                alert("미완료된 작업으로 수정");
            }
        }
    });

    save.addEventListener("click", e => {

        // 1. input element의 아이디 input-content 영역 안에있는 value를 가져와
        // 2. value가 빈 문자열이 아니면 
        // 3. 아이디 chk로부터 checked 속성 값도 따로 변수로 저장 후,
        // 4. Todo 객체를 생성
        // 5. list 배열에 추가한 후, 
        // 6. list 배열의 내용을 기반으로 ul 영역안에 li 엘리먼트 추가
        // ㄴ 그리기 전, ul의 innerHTML 을 모두 삭제

        const inputContent = document.getElementById("input-contents");
        const value = inputContent.value.trim();

        if (value === "") {
            alert("할 일을 입력하세요!");
            return;
        }

        const checkbox = document.getElementById("chk");
        const isDone = checkbox ? checkbox.checked : false;

        const todo = new Todo(value, isDone);

        list.push(todo);

        const li = document.createElement("li");
        li.innerHTML = `
            <div id="todo">
                <input type="checkbox" ${todo.getIsDone ? "checked" : ""} disabled>
                <label for="chk">
                    <div class="check-image"></div>
                </label>
                <input type="text" value="${todo.getContent()}" disabled>
            </div>
        `;
        ul.appendChild(li);

        inputContent.value = "";
        checkbox.checked = false;

        alert("저장 완료");
    });
}
