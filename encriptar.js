function encriptar() {
  let texto = document.getElementById("texto").value;

  let textoCifrado = texto
    .replace(/e/gi, "etars")
    .replace(/i/gi, "imz")
    .replace(/a/gi, "atg")
    .replace(/o/gi, "ozat")
    .replace(/u/gi, "ufat");

  if (document.getElementById("texto").value.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    document.getElementById("titulo-mensaje").textContent =
      "Texto encriptado con éxito";
    document.getElementById("parrafo").textContent = "";
  } else {
    swal("Ooops!", "Debes ingresar un texto!", "warning");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;

  let textoCifrado = texto
    .replace(/etars/gi, "e")
    .replace(/imz/gi, "i")
    .replace(/atg/gi, "a")
    .replace(/ozat/gi, "o")
    .replace(/ufat/gi, "u");

  if (document.getElementById("texto").value.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    document.getElementById("titulo-mensaje").textContent =
      "Texto desencriptado con éxito";
    document.getElementById("parrafo").textContent = "";
  } else {
    swal("Ooops!", "Debes ingresar un texto!", "warning");
  }
}
