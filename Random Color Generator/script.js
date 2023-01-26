const container = document.querySelector(".container");
const btn = document.querySelector(".btn")

const generateColor = () =>{
    let data = '0123456789ABCDEF';
    let color='#';
    for(let i=0; i<6; i++){
        color = color + data[Math.floor(Math.random()*16)]
    }
    const li = document.createElement("li");
    li.classList.add("color");
    li.innerHTML = `<div class="rect-box" style="background:${color}"></div>
                    <span class="hex-value">${color}</span>`;

    container.appendChild(li);
}





btn.addEventListener("click",generateColor);