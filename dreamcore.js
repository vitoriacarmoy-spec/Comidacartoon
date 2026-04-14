console.log("Funcionando!");

setTimeout(() => {
  document.querySelector(".barra").classList.add("mexer");
}, 5000);

setTimeout(() => {
  document.querySelector(".barra").classList.add("mexer2");
}, 10000);

setTimeout(() => {
  document.querySelector(".barra").classList.add("mexer3");
}, 15000);

setTimeout(() => {
  document.querySelector(".barra").classList.add("mexer4");
}, 20000);

setTimeout(() => {
  document.querySelector(".barra").classList.add("mexer5");
}, 25000);

//separação bonitinha
window.onload = () => {

  // FALABARRA
  const img = document.querySelector(".falabarra");

  const imagens = ["2.png","4.png","6.png","8.png","10.png"];
  let i = 0;

  const intervalo = setInterval(() => {
    img.classList.add("sumir");

    setTimeout(() => {
      i++;
      img.src = imagens[i];
       if (imagens[i] === "8.png") {
      img.classList.add("subir");
    } else {
      img.classList.remove("subir");
    }
    if (imagens[i] === "10.png") {
      img.classList.add("adireita");
    } else {
      img.classList.remove("adireita");
    }


      img.classList.remove("sumir");

      if (i === imagens.length - 1) {
        clearInterval(intervalo);
      }
    }, 1000);

  }, 5000);


  // REALBARRA
  const img2 = document.querySelector(".realbarra");

  const imagens2 = ["b1.png","b2.png","b3.png","b4.png","b5.png"];
  let i2 = 0;

  const intervalo2 = setInterval(() => {
    img2.classList.add("sumir");

    setTimeout(() => {
      i2++;
      img2.src = imagens2[i2];
       if (imagens[i] === "10.png") {
      img.classList.add("aesquerda");
    } else {
      img.classList.remove("aesquerda");
    }

      img2.classList.remove("sumir");

      if (i2 === imagens2.length - 1) {
        clearInterval(intervalo2);
      }
    }, 1000);

  }, 5000);

};