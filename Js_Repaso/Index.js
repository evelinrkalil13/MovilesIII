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

var promedio = prompt("Ingrese su promedio");
var nivel = prompt("¿Cursa pregrado?  (SI/NO)");
var valor_curso = 50000;
var porcentaje = 0;

 if(   promedio == 'number'){
   
    console.log("Ingrese un valor vázlido");
    
}

if (promedio > 4.5 && nivel == 'SI') {
    valor_curso = valor_curso * 28;
    porcentaje = (25 / 100) * valor_curso;
    valor_curso = (valor_curso - porcentaje);
    console.log("Usted cursará 28 creditos, tendrá un 25% de dcto y pagará" + valor_curso);
}
else if (promedio >= 4.0 && promedio < 4.5 && nivel == "SI") {
    valor_curso = valor_curso * 28;
    porcentaje = (10 / 100) * valor_curso;
    valor_curso = (valor_curso - porcentaje);
    console.log("Usted cursará 28 creditos, tendrá un 10% de dcto y pagará" + valor_curso);

}

else if (promedio >= 3.5 && promedio < 4.0 && nivel == "SI") {
    valor_curso = valor_curso * 20;
    console.log("Usted cursará 20 creditos, tendrá un 0% de dcto y pagará" + valor_curso);

}

else if (promedio >= 2.5 && promedio < 3.5 && nivel == "SI") {

    console.log("Usted no puede matricularse pinche vago");

}
else if (promedio >= 4.5 && nivel == 'NO') {
    valor_curso = valor_curso * 20;
    porcentaje = (20 / 100) * valor_curso;
    valor_curso = (valor_curso - porcentaje);
    console.log("Usted cursará 20 creditos, tendrá un 20% de dcto y pagará" + valor_curso);
}

else if (promedio >= 4.5 && nivel == 'NO') {
    valor_curso = valor_curso * 10;
    console.log("Usted cursará 10 creditos, tendrá un 0% de dcto y pagará " + valor_curso);
}

else {
    console.log("Ingrese un valor válido");
}
