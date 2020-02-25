
var cont = 0;
var programa = " ";
var sex = " ";
var nalumnos =  0;
var nota1= 0;
var nota2= 0;
var nota3= 0;
var nota4= 0;
var nota5= 0;
var contFF = 0;
var contfM = 0;
var contSF = 0;
var contSM = 0;

nalumnos = parseInt(prompt("Ingrese el número de alumnos a evaluar"));
var nalumnosc = nalumnos - 1;
while(cont <= nalumnosc){

    cont ++; 

    programa = prompt("Ingrese el nombre del programa del alumno (SISTEMAS O FINANZAS)");
    sex = prompt("Ingrese el sexo del alumno (F/M)");

    nota1 = prompt("Ingrese la nota 1");
    nota2 = prompt("Ingrese la nota 2");
    nota3 = prompt("Ingrese la nota 3");
    nota4 = prompt("Ingrese la nota 4");
    nota5 = prompt("Ingrese la nota 5");

    
var nota1c = parseInt(nota1);
var nota2c = parseInt(nota2);
var nota3c = parseInt(nota3);
var nota4c = parseInt(nota4);
var nota5c = parseInt(nota5);

var prom = (nota1c+nota2c+nota3c+nota4c+nota5c)/5;

if(programa == "finanzas" || programa == "FINANZAS"){

    
    var promF = (prom + prom)/nalumnos;

    if(sex == "f" || sex== "F"){
       
         contFF = contFF + 1; 

    } else if(sex == "m" || sex== "M"){
       
         contfM = contfM + 1; 
        
    }
}
else if(programa == "sistemas" || programa == "SISTEMAS"){

    var promS = (prom + prom)/nalumnos;

    if(sex == "f" || sex== "F"){
       
         contSF = contSF + 1; 

        
        
    } else if(sex == "m" || sex== "M"){
       
         contSM = contSM + 1; 
        
    }
}

}

console.log("El promedio del programa de finanzas es: " + promF);
console.log("La mujeres en finanzas son: " + contFF);
console.log("Los hombres en finanzas son: " + contfM);
console.log("El promedio del programa de sitemas es: " + promS);
console.log("La mujeres en sistemas son: " + contSF);
console.log("Los hombres en sistemas son: " + contSM);

console.log("Total encuestados: " + cont);
  



