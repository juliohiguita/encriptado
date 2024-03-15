let areaEncriptar = document.getElementById("areaEncriptar");

const btnEncriptar = document.querySelector(".btn__encriptar");
const btnDesencriptar = document.querySelector(".btn__desencriptar");

const elements = document.querySelectorAll(".elements");

const btnCopiar = document.querySelector(".boton__aside");
const txtcopiado = document.querySelector(".txtcopiado");

let textEncriptado = document.querySelector(".tex_encriptado");

// ocultamos los elementos no deseados
const ocultarElementos = () => {
  elements.forEach((elemento) => elemento.classList.add("ocultar"));
  btnCopiar.classList.remove("ocultar");
  textEncriptado.classList.remove("ocultar");
};

// bloque, encriptar
const encriptar = () => {
  let texto = areaEncriptar.value;
  texto = texto
    .replaceAll(/e/, "enter")
    .replaceAll(/i/, "imes")
    .replaceAll(/o/, "ober")
    .replaceAll(/a/, "ai")
    .replaceAll(/u/, "ufat");
  textEncriptado.value = texto;
  areaEncriptar.value = "";
};

// bloque, desencriptar
const desenCriptar = () => {
  let texto = areaEncriptar.value;
  texto = texto
    .replaceAll(/enter/, "e")
    .replaceAll(/imes/, "i")
    .replaceAll(/ober/, "o")
    .replaceAll(/ai/, "a")
    .replaceAll(/ufat/, "u");
  textEncriptado.value = texto;
  areaEncriptar.value = "";
};

//comprobamos los campos vacíos
const comprobarVacios = () => {
  if (areaEncriptar.value.trim() == "") {
    alert("ingresa una palabra");
    location.reload();
  }
};

// detectamos si tiene activado el BloqMayus
areaEncriptar.addEventListener("keyup", (event) => {
  if (event.getModifierState("CapsLock")) {
    alert("Solo se puede escribir en minúscula");
    location.reload();
  }
});

// encriptamos
btnEncriptar.addEventListener("click", () => {
  comprobarVacios();
  ocultarElementos();
  encriptar();
});

// desencriptamos
btnDesencriptar.addEventListener("click", () => {
  comprobarVacios();
  ocultarElementos();
  desenCriptar();
});

// btn copiar
btnCopiar.addEventListener("click", () => {
  // accedemos a los valores
  textEncriptado.select();
  textEncriptado.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(textEncriptado.value);

  
  txtcopiado.classList.remove("ocultar");
  setTimeout(() => {
    txtcopiado.classList.add("ocultar");
  }, 1000);
});
