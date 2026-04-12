console.log("Funcionando!");

setTimeout(() => {
  document.querySelector(".barra").classList.add("mexer");
}, 50000);

setTimeout(() => {
  document.querySelector(".barra").classList.add("mexer2");
}, 100000);

setTimeout(() => {
  document.querySelector(".barra").classList.add("mexer3");
}, 150000);

setTimeout(() => {
  document.querySelector(".barra").classList.add("mexer4");
}, 200000);

setTimeout(() => {
  document.querySelector(".barra").classList.add("mexer5");
}, 250000);

//separação bonitinha
window.onload = () => {
const img = document.querySelector(".falabarra")

const imagens=[
"2.png",
"4.png",
"6.png",
"8.png",
"10.png"

];
let i=0;
const intervalo = setInterval(() =>{
img.classList.add("sumir");

setTimeout(() =>{
  i++;
  img.src=imagens[i];
  img.classList.remove("sumir");

  //
  if(i===imagens.length - 1){
    clearInterval(intervalo);
  }
},1000); //fadetime

},5000);

};