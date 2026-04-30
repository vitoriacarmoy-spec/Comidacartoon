console.log("Funcionando!");

setTimeout(() => {
  document.querySelector(".barra").classList.add("mexer");
}, 6000);

setTimeout(() => {
  document.querySelector(".barra").classList.add("mexer2");
}, 12000);

setTimeout(() => {
  document.querySelector(".barra").classList.add("mexer3");
}, 18000);

setTimeout(() => {
  document.querySelector(".barra").classList.add("mexer4");
}, 24000);

setTimeout(() => {
  document.querySelector(".barra").classList.add("mexer5");
}, 30000);

//separação bonitinha
window.onload = () => {

  // FALABARRA
  const img = document.querySelector(".falabarra");

  const imagens = [" ","2.png","4.png","6.png","8.png","10.png"];
  let i = 0;

  const intervalo = setInterval(() => {
    img.classList.add("sumir");

    setTimeout(() => {

      if (i < imagens.length - 1) {
        i++;
        img.src = imagens[i];
      }

      if (imagens[i] === "8.png") {
        img.classList.add("subir");
      } else {
        img.classList.remove("subir");
      }

      // último elemento
      if (i === imagens.length - 1) {
        img.classList.add("adireita");
      } else {
        img.classList.remove("adireita");
      }

      img.classList.remove("sumir");

      if (i === imagens.length - 1) {
        clearInterval(intervalo);
      }

    }, 1000);

  }, 6000);


  // REALBARRA
  const img2 = document.querySelector(".realbarra");
//sabo muito kkkkkkkk
  const imagens2 = ["b1.png","b1.png","b2.png","b3.png","b4.png","b5.png"];
  let i2 = 0;

  const intervalo2 = setInterval(() => {
    img2.classList.add("sumir");

    setTimeout(() => {

      if (i2 < imagens2.length - 1) {
        i2++;
        img2.src = imagens2[i2];
      }

      // último elemento
      if (i2 === imagens2.length - 1) {
        img2.classList.add("aesquerda");
      } else {
        img2.classList.remove("aesquerda");
      }

      img2.classList.remove("sumir");

      if (i2 === imagens2.length - 1) {
        clearInterval(intervalo2);
      }

    }, 1000);

  }, 6000);

setTimeout(() => {

  const img3 = document.querySelector(".faladobolo");

  const imagens3 = ["","1.png","3.png","5.png","7.png","9.png", "11.png"];
  let i3 = 0;

  const intervalo3 = setInterval(() => {
    img3.classList.add("sumir");

    setTimeout(() => {

      if (i3 < imagens3.length - 1) {
        i3++;
        img3.src = imagens3[i3];
      }

      if (imagens3[i3] === "11.png") {
        img3.classList.add("chegar");
      } else {
        img3.classList.remove("chegar");
      }

      img3.classList.remove("sumir");

      if (i3 === imagens3.length - 1) {
        clearInterval(intervalo3);
      }

    }, 1000);

  }, 6000);

}, 0); 

};

let carregou = false;
window.addEventListener("load",() =>{
  carregou = true;

});

setTimeout(()=>{
  if (carregou){
    document.body.classList.add("loaded");

  }
},30000);