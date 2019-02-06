window.cipher = {
  decode : function (offset,msj) {
    let respuestaCesar = "";
      for (let i = 0; i < msj.length ; i++){
        let valorAscii =  msj.charCodeAt(i);
        let nuevoValorAscii = " ";
          //console.log(valorAscii); //valor ascii de la letra (numero)
          if ((valorAscii >= 65) && (valorAscii <= 90)) {
            nuevoValorAscii = (valorAscii + 65 - offset)  % 26 + 65;
            //console.log(nuevoValorAscii);
          } else if (((valorAscii >= 97) && (valorAscii <= 122)) ) {
            nuevoValorAscii = (valorAscii - 71 - offset)  % 26 + 97;
            //console.log(nuevoValorAscii);
          } else if (valorAscii === 32 ) {
            nuevoValorAscii = "".charCodeAt(0);
          } else {
            nuevoValorAscii += valorAscii;
            //console.log(nuevoValorAscii);
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
        let valorAscii =  msj.charCodeAt(i);
        let nuevoValorAscii = " ";
        //console.log(valorAscii); //valor ascii de la letra (numero)
        if ((valorAscii >= 65) && (valorAscii <= 90)) {
          nuevoValorAscii = (valorAscii - 65 + offset)  % 26 + 65;
        }  else if (((valorAscii >= 97) && (valorAscii <= 122)) ) {
          nuevoValorAscii = (valorAscii - 71 + offset)  % 26 + 97;
        } else if (valorAscii === 32 ) {
          nuevoValorAscii = "".charCodeAt(0);
        } else {
          nuevoValorAscii += valorAscii;
          //console.log(nuevoValorAscii);
        }
         let nuevaLetra = String.fromCharCode(nuevoValorAscii);
        //console.log(nuevaLetra);
        respuestaCesar = respuestaCesar + nuevaLetra ; 
          

          
        }
      
      return respuestaCesar;
}
};
