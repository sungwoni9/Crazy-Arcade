
root.innerHTML += "<button>My button</button>";

// root
const title = "엘리먼트 생성하기";
root.append(`
    <h1>$(title)<h1>
    `);

root.append(paragraph);


// *생성한 엘리먼트를 부모 요소에 추가(확장)을 해야함



//5*5 맵을 root 부모 엘리먼트 자식 요소 안의 map 영역 안에 그리기

// 랜덤 값 추출 

// Math.floor(Math.random() * (max - min(n+1)) + min
// 중복 없이 25 개를 1~50 범위 안에서 선별하여 -> map의 각 box의 innerText로 초기화
const rNum = Math.floor(Math.random() * 10) + 1;

// 1. 중복 없는 숫자 25개를 확보
const nums = [];
for (let i = 0; i < 25; i++) {
    const number = Math.floor(Math.random() * 50) + 1;

    let isDupl = false;
    for (let j = 0; j < i; j++) {
        if (number === nums[j]) {
            isDupl = true;
            break;
        }
    }

    if (isDupl) {
        i--;
    } else {
        nums.push(number);
    }
}
// 2. map 엘리먼트 만들기
const map = document.getElementById("div");
map.id = "map";
map.style.display = "flex";
map.style.width = "50vw";
map.style.height = "50vw";
map.style.maxHeight = "500px"
map.style.maxWidth = "500px"
map.style.flexWrap = "wrap";
map.style.gap = "5px";
map.style.margin = "calc(100vh/2 - 150px)auto"

// 3. box 엘리먼트 만들기 -> map에 추가
for (let i = 0; i < nums.length; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.style.display = "flex";
    box.style.justifyContent = "center";
    box.style.alignItems = "center"
    box.style.width = "calc(20% - 5px)";
    box.style.height = "calc(20% - 5px)";
    box.style.height = "50px";
    box.style.backgroundColor = "#4466AA";
    box.innerText = nums[i];
    box.style.textAlign = "center";

    map.appendChild(box);
}


// 4. 완성된 map을 root에 추가
root.appendChild(map);

