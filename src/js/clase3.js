//!================================================================================================================================================== 
//!====================================================Ciclos e Iteraccioenes======================================================================== 
//!================================================================================================================================================== 


//*============================================================DESAFIO===============================================================================

//      >>Consigna: 
//      
//      

//*     >> Ejemplo:
//      
//      
//      


// TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>CICLOS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 

//?     Son un medio rapido y sencillo para hacer algo repetidamente.
//?     Si tenemos que hacer alguna operacion mas de una vez en el programa, usaremos estructuras de bucles for, while o do...while

//?     CICLOS POR CONTEO: Repite un bloque de codigo un numero de veces especifica (for)
//?     CICLOS CONDICIONALES: Repite un bloque mientras la condicion evaluada es verdadera (while y do-while)

// TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>                 FOR                 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 

//*     ESTRUCTURA FOR:
//*     for(desde; hasta; actualizacion) {
//*     ... Lo que se escriba aca se ejecutara mientras dure el ciclo    
//*     }

//?     El "desde" es la zona en la que se establece los valores iniciales
//?     El "hasta" es el unico elemento que decide si se repite o se detiene el ciclo
//?     La "actualizacion" es el nuevo valor que se le asigna despues de cada repeticion


//?     Ejemplo contar del 1 al 10:
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

//?     Ejemplo multiplicar por numero que ingreses:
// let numeroIngresado = parseInt(prompt('Ingrese un numero'));
// for (let i = 1; i <= 10; i++) {
//     let resultado = i * numeroIngresado;
//     console.log(numeroIngresado + " x " + i + " = " + resultado);
// }

// TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>                 BREAK                 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 

//?     A veces, cuando escribimos una estructura for, necesitamos que bajo cierta condicion se interrumpa.
//?     Para eso utilizamos la sentencia BREAK.

//?     Ejemplo:
// for (let i = 0; i <= 10; i++) {
//     if (i === 5){ //llega a 5 y se corta el ciclo
//         //console.log(i) Muestra solo el 5
//         break;
//     }
//     console.log(i); //Muestra del 1 al 5
// }

// TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>                 CONTINUE                 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 

//?     A veces, cuando escribimos una estructura for, necesitamos que bajo cierta condicion, se saltee esa repeticion y siga con la proxima
//?     Para eso utilizamos la sentencia BREAK.

//?     Ejemplo:
// for (let i = 0; i <= 10; i++) {
//     if (i === 5){ 
//         continue;
//     }
//     console.log(i); //Muestra del 1 al 10 y saltea el 5
// }


// TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>                WHILE                 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 

//?     La estructura while 
//?     Para eso utilizamos la sentencia BREAK.

//?     Ejemplo: