// Este texto se ejecuta en el servidor.
/** Se importa el objeto functions de la librería "firebase-functions". */
const functions = require('firebase-functions');

/* Se exporta la función sobre https llamada "reco". */
exports.reco = functions.https.onRequest(
  /** Código para la función saludo.
   * @param {{query:Object}} request solicitud que recibe el servidor.
   * Corresponde a la librería Express.
   * @param {{send:(texto:string)=>void}} response respuesta que devuelve el
   * servidor. Corresponde a la librería Express. */
  (request, response) => {
    try {
         if (!request.query.peli) {
        // Entra aquí si el nombre1 es null, undefined o ""
        throw new Error("Falta la pelicula");
      } else if (!request.query.edad) {
        // Entra aquí si el nombre2 es null, undefined o ""
        throw new Error("Falta la edad");
      }
        if (request.query.peli=== "romance"&&request.query.edad=="15-18") {
            response.send("Usted puede ver: Yo antes de ti o A todos los chicos de los que me enamore");
          } else if(request.query.peli=== "romance"&&request.query.edad=="19-25") {
            response.send("Usted puede ver: Cuestión de tiempo o Posdata: te quiero");
          } else if(request.query.peli=== "romance"&&request.query.edad=="26-30") {
            response.send("Usted puede ver: Mujer bonita o 10 cosas que odio de ti");
          }else if (request.query.peli === "terror"&&request.query.edad=="15-18") { 
            response.send("Usted puede ver: Annabelle vuelve a casa o Dejame entrar");
          }else if (request.query.peli === "terror"&&request.query.edad=="19-25") { 
            response.send("Usted puede ver: Insidious a casa o Los otros");
          } else if (request.query.peli === "terror"&&request.query.edad=="26-30") { 
            response.send("Usted puede ver: Seis mujeres para el asesino  a casa o Saw");
          }else if (request.query.peli === "accion"&& request.query.edad=="15-18") {
            response.send("Usted puede ver: Fast & Furious: Hobbs & Shaw o El retorno del Jedi");
          }else if (request.query.peli === "accion"&& request.query.edad=="19-25") {
            response.send("Usted puede ver: La guerra de las galaxias o Misión imposible: Fallout");
          }else if (request.query.peli === "accion"&& request.query.edad=="26-30") {
            response.send("Usted puede ver: Capitán América: El soldado de invierno o El último mohicano");
          }else if (request.query.peli === "comedia"&&request.query.edad=="15-18") { 
            response.send("Usted puede ver: Deadpool o superlópez");
          }else if (request.query.peli === "comedia"&&request.query.edad=="19-25") { 
            response.send("Usted puede ver: Super cool o El club de las madres rebeldes");
          }else if (request.query.peli === "comedia"&&request.query.edad=="26-30") { 
            response.send("Usted puede ver: American Pie o Mi pobre angelito");
          }else{
            response.send("No existe esa opción. Intente una vez más"); 
          }
        } catch (e) {
            // Devuelve un texto de error.
            response.send(e.message);
          }
        });

