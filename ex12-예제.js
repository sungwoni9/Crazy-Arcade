window.onload = () => {
    const root = document.getElementById('root');
    
    root.innerHTML = "<h1>구구단</h1>";
    
    for(let x=2; x<10; x++) {
        root.innerHTML += `<h2>---- ${x}단 ----</h2>`;
        for(let y=1; y<=10; y++) {
            root.innerHTML += `<p>${x} X ${y} = ${x * y}</p>`;
        }
    }
}