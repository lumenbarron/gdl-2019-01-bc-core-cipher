const pagInicio =() => {
    const hide = document.getElementById("inicio").style.display = "block";
    const hide1 = document.getElementById("pag3").style.display = "none";
    const show = document.getElementById("pag2").style.display = "none";
  }

const pagDescifrar =() => {
  const hide = document.getElementById("inicio").style.display = "none";
  const hide1 = document.getElementById("pag3").style.display = "none";
  const show = document.getElementById("pag2").style.display = "block";
}

const pagCifrar =() => {
  const hide = document.getElementById("inicio").style.display = "none";
  const hide1 = document.getElementById("pag2").style.display = "none";
  const show = document.getElementById("pag3").style.display = "block";
}

const incio2 =() => {
  const hide = document.getElementById("inicio").style.display = "block";
  const hide1 = document.getElementById("pag3").style.display = "none";
  const show = document.getElementById("pag2").style.display = "none";
}

const decode =() => {
  let msj = document.getElementById("mensajeAdescifrar").value;
  let offset = parseInt(document.getElementById("noDesplazamientos").value);
  let msjDecode = window.cipher.decode(offset,msj);
  document.getElementById("write").innerHTML = "Tu mensaje descifrado es : " + msjDecode; 
}

document.getElementById("descifrar").addEventListener("click", decode);

const encode =() => {
  let msj = document.getElementById("mensajeAcifrar").value;
  let offset = parseInt(document.getElementById("noDesplazamientos2").value);
  let msjEncode = window.cipher.encode(offset,msj);
  document.getElementById("write2").innerHTML = "Tu mensaje descifrado es : " + msjEncode; 
  
}
document.getElementById("cifrar").addEventListener("click", encode);

