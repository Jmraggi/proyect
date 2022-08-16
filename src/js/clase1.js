/*
!============================================================================================== 
!===================================Sintaxis y Variables=======================================
!============================================================================================== */


// * ==================================EJERCITACIONES========================================== */


//Se declaran las variables, sean locales o no
// var nombre = "Juan Manuel";
// let apellido = "Raggi"; 
// const DNI = 39098714;           //? Las constantes ponerlas en MAYUSCULA para poder diferenciarlas
// let direccion;                  
// direccion = "Catamarca 1788";

// nombre = "Esteban"; //? Se pueden cambiar valores de let y var pero no los de const
// apellido = "Perez";

// *  =====================================DESAFIO============================================== */


//      >> Consigna:Crea un script en JS que le solicite al usuario ingresar mínimo1(un)dato.
//      Luego,con JavaScript,realiza operaciones matemáticasode concatenación sobre las
//      entradas teniendo en cuenta el tipo de dato.Al finalizar mostrar el resultados con alert() o console.log()

let nombre = prompt("Escribir un nombre porfavor: ");
let num1 = prompt("Poner el primer numero porfavor: ");
let num2 = prompt("Poner el segundo numero porfavor: ");

num1 = parseInt(num1); //Se utiliza parseInt para que el texto que toma el promt sea un numero, sino lo toma como string
num2 = parseInt(num2);

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicar = num1 * num2;


console.log("Los datos ingresados son: " + nombre, num1, num2);
console.log("---------------------------------------------------------------------");
console.log("---------------------------------------------------------------------");
console.log("Primero dejame saludarte "+ nombre);
console.log("---------------------------------------------------------------------");
console.log("La suma es: " + suma);
console.log("La resta es: " + resta);
console.log("La multiplicacion: " + multiplicar);


//      Declarar una variable significa CREARLA. Para esto usamos la palabras reservadas (var,let o const).
//      En proramacion no se puede usar acentos, o letra ñ. Dentro de estas variables podemos guardar valores,
//      Se puede asociar con number (valor numerico), string (valor de texto).

// TODO  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Let y Const<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//      Let y const son declaraciones, una vriable let puede cambiar en el  trasncurso de la aplicacion,
//      Una constante (Const) recibe una unica asigancion. la diferencia entre let,const y var, es que
//      esta ultima tiene un scope global.

// TODO  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Operaciones basicas<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ? Con variables de valores numericos, podes realizar operaciones matematicas: sumas, restas, etc.

// let textoA = "CODER";
// let textoB = "HOUSE";
// const BLANCO = 11;
// * Concatenar textoAytextob("CODER"+"HOUSE"="CODERHOUSE")
// let resultadoA=textoA+textoB;
// * Concatenar textoBy1("HOUSE"+1 = "HOUSE1)"')
// let resultadoB=textoB+ 1;
// * Concatenar textoA,BLANCOytextoB("CODER" + "" + "HOUSE"="CODER HOUSE")
// let resultadoC=textoA+BLANCO+textoB;

// console.log(resultadoA);
// console.log(resultadoB);
// console.log(resultadoC);
                                      

//TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Operaciones basicas<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ? Con variables de valores numericos, podes realizar operaciones matematicas: sumas, restas, etc.

// let textoA = "CODER";
// let textoB = "HOUSE";
// const BLANCO = 11;
// ? Concatenar textoAytextob("CODER"+"HOUSE"="CODERHOUSE")
// let resultadoA=textoA+textoB;
// ? Concatenar textoBy1("HOUSE"+1 = "HOUSE1)"')
// let resultadoB=textoB+ 1;
// ? Concatenar textoA,BLANCOytextoB("CODER" + "" + "HOUSE"="CODER HOUSE")
// let resultadoC=textoA+BLANCO+textoB;

// console.log(resultadoA);
// console.log(resultadoB);
// console.log(resultadoC);


//TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>PROMPT, CONSOLE, ALERT<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//      prompt() mostrar un cuadro de dialogo para que el usuario ingrese un dato.
//      ejemplo: let nombreIngresado = prompt("Ingrese su nombre porfavor");
//      Esto queda almacenado en la variable nombreIngresado

//      console.log() muestra el mensaje en la consola
//      ejemplos: console.log("Mensaje de prueba") >>Yo le digo que mostrar
//      let nombre = "juan perez" 
//      console.log(nombre) >> Le paso por parametros lo que quiero que muestre

//      alert() muestra el mensaje en una ventana emergente
//      ejemplos: alert("Mensaje de prueba") >>Yo le digo que mostrar


