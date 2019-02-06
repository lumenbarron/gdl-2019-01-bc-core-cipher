window.cipher = {
  decode : function (offset,msj) {
    let respuestaCesar = "";
      for (let i = 0; i < msj.length ; i++){
        //console.log(msj.length); //es para ver la longitud del string
          //console.log("si ejecuta el for", offset); 
          let valorAscii =  msj.charCodeAt(i); //valor ascii de la letra (numero)
          //console.log(valorAscii);
          let nuevoValorAscii = (valorAscii + 65 - offset)  % 26 + 65;
          //console.log(nuevoValorAscii);
          if (valorAscii === 32) {
              nuevoValorAscii = "".charCodeAt(0);
            }  
          
        let nuevaLetra = String.fromCharCode(nuevoValorAscii);
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
          let valorAscii =  msj.charCodeAt(i); //valor ascii de la letra (numero)
          //console.log(valorAscii);
          let nuevoValorAscii = (valorAscii - 65 + offset)  % 26 + 65;
          //console.log(nuevoValorAscii);
          if (valorAscii === 32) {
              nuevoValorAscii = " ".charCodeAt(0);
          /* }else if (nuevoValorAscii > 90) { 
             respuestaCesar = " ".charCodeAt(0);*/
        }  
          
        let nuevaLetra = String.fromCharCode(nuevoValorAscii);
        //console.log(nuevaLetra);
        respuestaCesar = respuestaCesar + nuevaLetra ; 
          

          
        }
      
      return respuestaCesar;
}
};


