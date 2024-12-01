const group = new Array();

class User {
    #name;
    #id;
    #phone;

    constructor(name, id, phone) {
        this.#name = name;
        this.#id = id;
        this.#phone = phone;
    }

    getName = () =>  this.#name;

    getId = () => this.#id;

    getPhone = () => this.#phone;

    toString = () => '{"name":"${this.#name}", "id":"${this.#id}", "phone":"${this.#phone}"}';

}

for (let i = 0; i < 5; i++) {
    const name = prompt('이름을 입력하세요');

    let id = '';
    let isRun = true;
    while (isRun) {
        id = prompt('아이디를 입력하세요 (대소문자, 숫자를 포함하여 입력하세요)');

        const regexId = /^[0-9a-zA-Z]+$/;
        const result = id.match(regexId);

        if (!result) {
            alert('잘못된 id형식입니다. 다시 입력하세요');
            continue;
        }

        let isDuplicate = false;
        for (let i = 0; i < group.length; i++) {
            if (group[i].getId() === id) {
                alert('중복된 아이디가 존재합니다.');
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            alert('사용 가능한 아이디입니다.');
            isRun = false;
        }
    }

    let phone = '';
    let isPhoneValid = false;
    while (!isPhoneValid) {
        phone = prompt('전화번호를 입력하세요');
        const regexPh = /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/;

        if (regexPh.test(phone)) {
            isPhoneValid = true;
        } else {
            alert('전화번호를 xxx-xxxx-xxxx 형식으로 입력하세요.');
        }
    }

    const newUser = new User(name, id, phone);
    group.push(newUser);

    alert('축하합니다 회원가입 되었습니다!!');

    const info = group[group.length - 1].toString;
}
