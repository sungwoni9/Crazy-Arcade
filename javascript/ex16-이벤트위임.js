class Todo {
    #isDone;
    #content;

    constructor(content = "", isDone = false) {
        this.#content = content;
        this.#isDone = isDone;
    }

    // getIsDone = () => this.#isDone;

    // get 또는 set 키워드로 만든 getter와 setter는 내부적으로는 메소드로 동작을 하지만 
    // 사용을 할 때에는 마치 속성값을 초기화하거나 얻는 것처럼 사용을 함
    get getIsDone() {
        return this.#isDone;
    }

    set setIsDone(isDone) {
        this.#isDone = isDone;
    }

    get getContent() {
        return this.#content;
    }

    set setContent(content) {
        this.#content = content;
    }
}

const createTodoListElement = (todo, code = 0) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    const img = document.createElement("img");
    const text = document.createElement("input");
    const button = document.createElement("button");

    li.id = code === 0 ? "input" : `todo${code}`;
    checkbox.id = code === 0 ? "chk" : `chk${code}`;
    checkbox.type = "checkbox";
    label.for = code === 0 ? "chk" : `chk${code}`;
    img.className = "check-image";
    text.type = "text";
    text.value = todo.getContent;
    button.id = "delete";
    text.disabled = code !== 0;

    if (code === 0) {
        text.id = "input-content";
        text.placeholder = "오늘의 할 일";
        text.autofocus = true;
    }

    label.appendChild(img);

    div.appendChild(checkbox);
    div.appendChild(label);
    div.appendChild(text);

    li.appendChild(div);

    return li;
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

    // 이벤트 버블링을 활용한 ul 엘리먼트에게 이벤트 위임 처리 
    ul.addEventListener("click", e => {
        const target = e.target;
        if (target.type === "checkbox" && target.id !== "chk") {
            const message = target.checked ? "완료" : "미완료";
            alert(message);
        }
    });

    save.addEventListener("click", e => {
        // 1. input element의 아이디 input-contnet 영역 안에 있는 value를 가져와 
        const input = document.getElementById("input-content");
        const content = input.value;
        const isDone = document.getElementById("chk").checked;

        if (content) {
            const todo = new Todo(content, isDone);
            list.push(todo);

        }

        ul.innerHTML = "";

        list.forEach((todo, index) => {
            const li = createTodoListElement(todo, index + 1);
            ul.appendChild(li);
        });

        const i = createTodoListElement(new Todo());
        ul.appendChild(i);
    });
}