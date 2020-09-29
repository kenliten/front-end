var shown = false;

window.addEventListener("scroll", ()=>{
    // if (innerHeight )
    let header = document.querySelector("header");
    if(scrollY > 150){
        if (!shown){
            document.querySelector("body").style.paddingTop = "100px";
            shown = true;
            header.classList.add("sticky");
            header.style.position = "sticky";
            header.style.top = "0";
            document.querySelector(".tabs").style.display = "none";
        }
    }else{
        if (shown){
            document.querySelector("body").style.paddingTop = "0";
            header.classList.remove("sticky");
            header.style.position = "initial";
            document.querySelector(".tabs").style.display = "block";
            shown = false;
        }
    }
});