let browse=document.querySelector("#browse");
let mode="light";
browse.addEventListener("click" , () => {
    if (mode==="light"){
        mode="dark";
        document.querySelector("body").style.backgroundColor="blue";
    }
    else{
        mode="light";
        document.querySelector("body").style.backgroundColor="aqua";
    }

})
