class Todo {
    #isDone;
    #content;

    constructor(content = "", isDone = false) {
        this.#content = content;
        this.#isDone = isDone;
    }

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

    //1)
    toString = () => {
        return JASON.stringify(toJson());
    }

    //2)
    toJson = () => {
        return {
            content: this.#content,
            isDone: this.#isDone
        }
    }
}

const createTodoListElement = (todo, code = 0) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    const img = document.createElement("img");
    const text = document.createElement("input");


    li.id = code === 0 ? "input" : `todo${code}`;
    checkbox.id = code === 0 ? "chk" : `chk${code}`;
    checkbox.type = "checkbox";
    label.for = code === 0 ? "chk" : `chk${code}`;
    img.className = "check-image";
    text.type = "text";
    text.value = todo.getContent;
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

const removeElement = (code) => {
    const li = document.getElementById(`todo${code}`);
    if (li) {
        li.remove();
    }
};

window.onload = () => {

    // localStorage에 기존의 데이터가 있는지 확인
    // ㄴ 데이터가 있으면
    // ㄴ 오브젝트로 변환 후, 길이가 1 이상이면
    // ㄴ 데이터를 기반한 엘리먼트 그리기

    const list = console.log(localStorage.getItem("todoList-data"));
    const todoList = document.getElementById("todo-list");
    const ul = todoList.querySelector("ul");
    const save = todoList.querySelector("#save");
    const localData = localStorage.getItem("todoList-data");

    if (localData) {
        const tempList = JSON.parse(localData);

        if (tempList.length) {
            tempList.forEach((e, i) => {
                const todo = new Todo(e.content, e.isDone);
                list.push(todo);

                const li = createTodoListElement(todo, i + 1);
                ul.appendChild(i);
            });

            const sampleLi = document.getElementById("todo-sample");
            ul.removeChild(sampleLi);
        }
    }

    ul.addEventListener("click", e => {
        const target = e.target;
        if (target.type === "checkbox" && target.id !== "chk") {
            const message = target.checked ? "완료" : "미완료";
            alert(message);
        }

        if (target.id === "delete") {
            const code = target.dataset.code;
            removeElement(code);
            localStorage.setItem("todoList-data", JSON.stringify(list));
            alert("삭제완료");
        }
    });

    save.addEventListener("click", e => {
        const target = e.target;
        const input = document.getElementById("input-content");
        const content = input.value.trim();
        const isDone = document.getElementById("chk").checked;
        const button = document.createElement("button");

        if (target.id === "save") {
            if (content) {
                const todo = new Todo(content, isDone);
                list.push(todo);

                const li = createTodoListElement(todo, list.length);
                ul.appendChild(li);

                let dataStr = "";
                const tempList = [];
                list.forEach(e => {
                    tempList.push(e.toJson);
                });

                dataStr = JSON.stringify(tempList);

                localStorage.setItem("todoList-data", dataStr);

                // 저장 처리 후, 인풋박스 비워두기
                input.value = "";

                document.getElementById("chk").checked = false;

                button.id = "delete";
                button.labels = "삭제";
            }

            alert("저장 완료");
        } else {
            alert("내용을 입력하세요!");
        }
    });
}