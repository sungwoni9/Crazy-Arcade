// 다차원 배열
// ㄴ 배열 안에 있는 또다른 배열

// 배열 초기화 
// 1) = [];
// 2) = new Array();

const arr = new Array();

arr.push(1);
arr.push(3.14);
arr.push('hello');
arr.push(1, 2, 3);
arr.push({
    username: '홍길동',
    age: 30
});

console.log(arr);


/*
[
    [1,2,3,4,5],
    [1,2,3,4],
    [1,2,3]
    [1,2]
    [1]
    ]
    
    콘솔에서 테이블 출력(2차원 배열에 대하여)
    console.table(map)
    */

const map = new Array();
for (let i = 0; i < 5; i++) {
    const row = [];
    for (let j = 1; j <= 5 - i; j++) {
        map[i].push(j);
    }
    map.push(row);
}

console.table(map);
