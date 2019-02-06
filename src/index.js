const pagInicio =() => {
  document.getElementById("inicio").style.display = "block";
  document.getElementById("pag3").style.display = "none";
  document.getElementById("pag2").style.display = "none";
  };
document.getElementById("volver").addEventListener("click", pagInicio);

const pagDescifrar =() => {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("pag3").style.display = "none";
  document.getElementById("pag2").style.display = "block";
};
document.getElementById("botonDescifrar").addEventListener("click", pagDescifrar);

const pagCifrar =() => {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("pag2").style.display = "none";
  document.getElementById("pag3").style.display = "block";
};
document.getElementById("botonCifrar").addEventListener("click", pagCifrar);

const decode =() => {
  let msj = document.getElementById("mensajeAdescifrar").value.toUpperCase();
  let offset = parseInt(document.getElementById("noDesplazamientos").value);
  let msjDecode = window.cipher.decode(offset,msj);
  document.getElementById("write").innerHTML = "Tu mensaje descifrado es : " + msjDecode; 
};
document.getElementById("descifrar").addEventListener("click", decode);

const encode =() => {
  let msj = document.getElementById("mensajeAcifrar").value.toUpperCase();
  let offset = parseInt(document.getElementById("noDesplazamientos2").value);
  let msjEncode = window.cipher.encode(offset,msj);
  document.getElementById("write2").innerHTML = "Tu mensaje descifrado es : " + msjEncode; 
  
};
document.getElementById("cifrar").addEventListener("click", encode);


const incio2 =() => {
  document.getElementById("inicio").style.display = "block";
  document.getElementById("pag3").style.display = "none";
  document.getElementById("pag2").style.display = "none";
};
document.getElementById("volver2").addEventListener("click", incio2);

const borrar =() => {
  document.getElementById("mensajeAdescifrar").value="";
  document.getElementById("noDesplazamientos").value="";
  document.getElementById("mensajeAcifrar").value="";
  document.getElementById("noDesplazamientos2").value="";


};
  document.getElementById("volver").addEventListener("click", borrar);
  document.getElementById("volver2").addEventListener("click", borrar);
