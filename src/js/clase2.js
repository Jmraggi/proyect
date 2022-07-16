
//!================================================================================================================================================== 
//!=======================================================Control de flujos========================================================================== 
//!================================================================================================================================================== 


//*============================================================DESAFIO===============================================================================

//      >>Consigna: Crea un algoritmo que solicite al usuario uno o más valores ingresados por prompt(), compare las
//      entradas y,en función de ciertas condiciones, muestre por consola o alert()el resultado según los valores
//      ingresados y las condiciones cumplidas.

//*     >> Ejemplo:
//      Pedir número mediante prompt y si es mayora 1000 mostrar un alert.
//      Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.
//      Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.

let numeroUno = prompt("Ingresa un numero que desee");

if (numeroUno >= 1000){
    alert("el numero es grande pa, mas que 1000");
}else{
    alert("Que numero chiquito elegiste, es menor que 1000");
}

let textoIngresado = prompt("Ingresar un texto");
if((textoIngresado =="HOLA") || (textoIngresado =="Hola")){
    alert("Buenos dias/tardes/noches genio!");
}else{
    alert("Saludame malo");
}

let numeroDos = prompt("Ingresa otro numero")
if ((numeroDos >= 10) && (numeroDos <= 50)){
    alert("El numero esta entre 10 y 50");
}else{
    alert("El numero NO esta entre 10 y 50");
}





//?     Hasta el momento todas las intrucciones que escribimos se ejecutan en linea recta, una sentencia despues del a otra.
//?     La idea del control de flujos es marcar puntos en nuestra aplicacion, donde a partir de alguna evaluacion, nuestro programa
//?     pueda tomar varios caminos posibles de accion

// TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Valores booleanos<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 

//?     Las variables booleanas son las que SOLO TIENEN DOS VALORES (TRUE O FALSE)
//?     Ejemplo: 

//  let edad = 18

//  if(edad >= 18){
//      alert('Puede beber alcohol');
//  }else{
//      alert("vaya a dormir señor")
//  }



// TODO  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Estructura IF-ELSE<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 

//?     La estructura mas utilizada, corresponde al famoso, si la condicion se cumple, ejecuta un codigo.
//?     Cuando comparamos dos valores a traves de un operador de comparacion, esta operacion siempre se
//?     resuelve en TRUE o FALSE, el primer operador de comparacion es "=="
//?     Para entender el ELSE debemos relacionarlo de la siguiente manera:
//?     "Si se cumple esta condicion, haslo; si no se cumple, haz esto otro".

// /* si-condicion*/
// if(true){
// /*bloque de código a ejecutar si es verdadero*/
//     console.log("vas a ver este mensaje");
// }

// Ejemplo de condicionales

// let unNumero = 5;
// if (unNumero == 5){
//     console.log("Si es 5 as a ver este mensaje");
// }else{
//     console.log("Si no es 5 vas a ver este mensaje");
// }
    
                                      

//TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Operadores Logicos<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//?     Disponemos de los operadores logicos habituales como son: es igual, es distinto, menos, mayor, o igual,nayor o igual,
//?     operador and(&&), or(||) y not(!)


//?     Ejemplo condicional compuesta con &&

// let nombreIngresado = prompt("Ingresar nombre");
// let apellidoIngresado = prompt("Ingresar apellido");

// if((nombreIngresado !="") && (apellidoIngresado !="")){
//     alert("Nombre: " + " " + nombreIngresado + "\nApellido: " + " " + apellidoIngresado);
// }else{
//     alert("Error: Ingresar nombre y apellido");
// }

//?     Ejemplo condicional compuesta con ||

// let colorIngresado = prompt("Ingresar un color");
// if((colorIngresado =="Rojo") || (colorIngresado =="rojo")){
//     alert("El color ingresado es rojo");
// }else{
//     alert("El color ingresado NO ES rojo");
// }




//TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>PROMPT, CONSOLE, ALERT<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


