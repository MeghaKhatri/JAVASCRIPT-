let bd = document.querySelector("body");
bd.addEventListener("click",(val)=>{
    let div =document.createElement("div");
    div.setAttribute("id","crcl");
    div.style.left=`${val.clientX}px`
    div.style.top=`${val.clientY}px`
    bd.append(div);
    
    setTimeout(() => {
        div.style.animationName=AnimationEffect;
    }, 2000);
})

