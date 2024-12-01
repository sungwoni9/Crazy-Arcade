// setIntercal()을 활용한 타이머 만들기

let sec = 0;

const hourTimer = setInterval(e=> {
    console.log(++min);
},60000);

const minTimer = setInterval(e=> {
    console.log(++min);
},60000);

const secTimer = setInterval(e => {
    console.log(++sec);

    if (sec === 3) {
        clearInterval(timer);
    }

}, 1000);

let cnt = 0;


const timer = setInterval(e => {
    const now = new Date();
    const message = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds}:${now.getMilliseconds})`;

    console.log(message);

    if(++ cnt === 3000){
        clearInterval(timer);
    }
})



// 시:분:초.밀리초 포멧으로 3초까지 출력

