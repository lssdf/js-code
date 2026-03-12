let boxs = document.querySelectorAll(".box");

console.dir(boxs);

for(let i = 0; i<3; i++){
    boxs[i].innerText = `This is div ${(i+1)}`;
}