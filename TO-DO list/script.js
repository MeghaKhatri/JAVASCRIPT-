let form = document.querySelector("form");
let output = document.getElementById("output");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let title = document.getElementById("title").value;
    let disc = document.getElementById("disc").value;
    let otpt = document.createElement("div");
    otpt.setAttribute("id","lists");

    otpt.innerHTML=` <div id="lists">
                        <p id="to">${title}</p>
                        <p id="do">${disc}</p>
                    </div>`;
     
    localStorage.setItem("TODO",[title,disc]);   
    output.appendChild(otpt);
})



