// 1. 프로토타입 활용 객체 생성

// 1) 프로토타입 정의
function Person(name = 'nonname', age = 30) {
    this.name = name;
    this.age = age;
    this.toString = () => {
        return `name : ${this.name}, age : ${this.age}`;
    }
}

// 2) 객체 생성
const dooly = new Person('고둘리', 10000);

console.log(dooly.name);
console.log(dooly.age);
console.log(dooly.toString());

const gildong = new Person();
console.log(gildong.name);
console.log(gildong.age);
console.log(gildong.toString());


const headong = new Person('고희동')
console.log(headong.name);
console.log(headong.age);
console.log(headong.toString());

// 2. 클래스 활용 객체 생성


// 1) 클래스 정의

class User {
    name;
    #age;

    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }

    getAge = () => {
        return this.#age;
    }
}

// 2) 객체 생성
const ddochi = new User('또치', 20);

console.log(ddochi.name);
console.log(ddochi.getAge);
