/*var nombre = 'Evelin'

console.log(nombre);

if (nombre.length > 3) {

    console.log("Tiene más de 3 carácteres");
}

for (var i = 0; i < 5; i++) {

    console.log("Evelin Kalil");
}

while (nombre.length > 2) {
    console.log("Evelin Rendón Kalil");
    break;
}

var datos = prompt("Ingrese los datos"); //Lectura de datos didactica, no recomendable para usar en producción.
*/
//ej1

var seguimiento = true;
var numero = 0;
var continuacion = "SI"   
var cont = 0;

while(continuacion == "SI"){
    cont ++; 
    var resto = cont % 5;
    if(resto != 0){
       
        var Encuesta = prompt("Edad persona"+ cont);
        
    } else{
         continuacion = prompt("Desea continuar? (SI/NO)");
    }
}
  



