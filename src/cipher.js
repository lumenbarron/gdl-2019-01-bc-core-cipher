window.cipher = {
  decode : function (offset,msj) {
    let respuestaCesar = "";
      for (let i = 0; i < msj.length ; i++){
        //console.log(msj.length) //es para ver la longitud del string
          //console.log("si ejecuta el for") 
          var valorAscii =  msj.charCodeAt(i); //valor ascii de la letra (numero)
         // console.log(valorAscii);
          var nuevoValorAscii = (valorAscii - 65 - offset)  % 26 + 65;
          //console.log(nuevoValorAscii);
          if (nuevoValorAscii < 65) {
              nuevoValorAscii = "Z".charCodeAt(0);
        }else if (msj[i]== " ") { 
          respuestaCesar += " ";
        }  
          
        var nuevaLetra = String.fromCharCode(nuevoValorAscii);
        //console.log(nuevaLetra);
        respuestaCesar = respuestaCesar + nuevaLetra ; 
          

          
        }
      
      return respuestaCesar;
  } ,

  encode : function (offset,msj)  {
      let respuestaCesar = "";
      for (let i = 0; i < msj.length ; i++){
        //console.log(msj.length) //es para ver la longitud del string
          //console.log("si ejecuta el for") 
          var valorAscii =  msj.charCodeAt(i); //valor ascii de la letra (numero)
          //console.log(valorAscii);
          var nuevoValorAscii = (valorAscii - 65 + offset)  % 26 + 65;
          //console.log(nuevoValorAscii);
          if (nuevoValorAscii > 90) {
              nuevoValorAscii = "A".charCodeAt(0);
        }else if (msj[i]== " ") { 
           respuestaCesar += " ";
        }  
          
        var nuevaLetra = String.fromCharCode(nuevoValorAscii);
        //console.log(nuevaLetra);
        respuestaCesar = respuestaCesar + nuevaLetra ; 
          

          
        }
      
      return respuestaCesar;
}
};

/*src/cipher.js: acá debes implementar el objeto cipher, 
el cual debe estar exportado en el objeto global (window). 
Este objeto (cipher) debe contener dos métodos:
cipher.encode(offset, string): offset es el número de posiciones
 que queremos mover a la derecha en el alfabeto y 
 string el mensaje (texto) que queremos cifrar.
cipher.decode(offset, string): offset es el número de posiciones 
que queremos mover a la izquierda en el alfabeto y 
string el mensaje (texto) que queremos descifrar.*/

