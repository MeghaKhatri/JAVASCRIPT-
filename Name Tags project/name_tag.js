const name = document.getElementById("name");
const tagscontainer = document.querySelector(".tags");

const addName = () => {
    // console.log(name.value); //for check 

    const tag = document.createElement("div");
    tag.setAttribute("class", "tag");
    tag.innerHTML = `Hey, I am ${name.value}`;
    tagscontainer.append(tag);
}