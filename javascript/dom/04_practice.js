let modeBtn = document.querySelector('#mode');

let mode = "light";

modeBtn.addEventListener("click",()=>{
    if(mode === "light" ){
        document.querySelector("body").style.background = "black"
        mode = "dark";
    }else{
        document.querySelector("body").style.background= "white"
        mode = "light";
    }
    console.log(mode);
})