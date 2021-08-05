//--> Variable con texto.
//var nombre="Zackyel";

//--> Variable simple.
var nombre;
var edad = 8 * 2;

//--> Ventana "prompt" con aviso (Ingresa tu nombre) y texto escrito en el cuadro de ingreso (Valor)
//prompt("Ingresa tu nombre", "Valor");

//--> Ventana "prompt" con aviso (Ingresa tu nombre).
nombre = prompt('Ingresa tu nombre en "Entradas"');
//edad = prompt("Ingresa tu edad");

//--> Ventana alert con la variable "nombre" entre paréntesis (Aviso: Se utiliza la variable con texto para mostrar el nombre)
//alert(nombre);

/*--> En "document.write" se inserta un texto o una variable dentro del paréntesis y esto permite que el prompt publique el texto en pantalla (una vez introducido)

Nota: En este caso se utiliza "nombre = prompt("Ingresa tu nombre");"*/
//document.write(nombre);

//Se aplican las comillas con espacio para separar los textos que se van a introducir.
document.write(nombre + " " + edad);

// Al introducir un texto o una variable, este permite al prompt que publique el texto introducido en la cosola.
//console.log(nombre);