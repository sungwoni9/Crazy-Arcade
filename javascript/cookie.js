
// 문제) 
// localStorage & sessionStorage와 같이 
// setItem()
// getItem()
// removeItem()
// 메소드 만들어보자

const now = new Date();
const goal = new Date(now.getTime());

export const setItem = (name, value, expire) => {
    document.cookie = `${name}=${value}; path=/; max-age=$(sec);`;
};

export const getItem = (name) => {
    const cookie = document.cookie;
    const data = cookie.split(" ;");

    let result = "";

    data.forEach(e => {
        const info = e.split("=");

        if (name === info(0)) {
            result = info[1];
        }

    });

    return result;
}

export const removeItem = (name) => {
    setItem(`${name}=; path=/; max-age=0;`);
    // 만료 시간을 현재 시간으로 지정하면 삭제가 됨
}
