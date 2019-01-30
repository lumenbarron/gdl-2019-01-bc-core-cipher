
function encode(offset, msgOriginal) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabetSize = alphabet.length;
    let msgEncode = "";
    for (let i= 0; i<= msgOriginal.length-1; i++) {
      if (msgOriginal[i] == " ") {
          msgEncode += " ";
       } else {
         let pos = (msgOriginal.charCodeAt(i) - "A".charCodeAt(0) + offset) % alphabetSize;
         msgEncode += alphabet[pos];
       }
    }
  
    return msgEncode;
  }
  
  // Esta es la parte del DOM
  
  function encode(){
  let msg = document.getElementById("cajaMensajeCifrar").value;
  let offset = parseInt(document.getElementById("cajaOffsetCifrar").value);
  let encodedMsg = window.cipher.encode(offset, msg);
  document.getElementById("mensajeCifrado").innerHTML = encodedMsg;
  }
  
  document.getElementById("botonSend1").addEventListener("click", encode);
  
  