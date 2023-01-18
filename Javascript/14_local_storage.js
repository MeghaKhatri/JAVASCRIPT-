// session storage :- In session storage data store for a single session or tab.if you open this in another tab or you refresh this ,the data will erased
// local storage :-In local storage store data at once show in all session or tabs

let inp = document.getElementById("inp")   //access input type
let btn = document.getElementById("btn")    // access button

let clickButton = ()=>{
    alert(inp.value)
    sessionStorage.setItem("Name",inp.value)   //user give data that store in session storage
}

btn.addEventListener("click", clickButton);

// get item and remove or delete data
let p = document.getElementById("para");

let dlt = document.getElementById("delete")
dlt.addEventListener("click",()=>{
    let data =sessionStorage.getItem("Name")
    p.innerHTML = `${data} is Removed`
    sessionStorage.removeItem("Name")
})
