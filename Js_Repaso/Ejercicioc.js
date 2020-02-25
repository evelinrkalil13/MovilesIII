
let cont = 0;
let programa = " ";
let sex = " ";
let nalumnos =  0;
let nota1= 0;
let nota2= 0;
let nota3= 0;
let nota4= 0;
let nota5= 0;
let contFF = 0;
let contfM = 0;
let contSF = 0;
let contSM = 0;
let promF = 0;
let promS = 0;

nalumnos = parseInt(prompt("Ingrese el número de alumnos a evaluar"));
let nalumnosc = nalumnos - 1;
while(cont <= nalumnosc){

    cont ++; 

    programa = prompt("Ingrese el nombre del programa del alumno (SISTEMAS O FINANZAS)");
    sex = prompt("Ingrese el sexo del alumno (F/M)");

    nota1 = prompt("Ingrese la nota 1");
    nota2 = prompt("Ingrese la nota 2");
    nota3 = prompt("Ingrese la nota 3");
    nota4 = prompt("Ingrese la nota 4");
    nota5 = prompt("Ingrese la nota 5");

    
let nota1c = parseInt(nota1);
let nota2c = parseInt(nota2);
let nota3c = parseInt(nota3);
let nota4c = parseInt(nota4);
let nota5c = parseInt(nota5);

let prom = (nota1c+nota2c+nota3c+nota4c+nota5c)/5;

if(programa == "finanzas" || programa == "FINANZAS"){

    
    promF = (prom + prom)/nalumnos;

    if(sex == "f" || sex== "F"){
       
         contFF = contFF + 1; 

    } else if(sex == "m" || sex== "M"){
       
         contfM = contfM + 1; 
        
    }
}
else if(programa == "sistemas" || programa == "SISTEMAS"){

   promS = (prom + prom)/nalumnos;

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
  



