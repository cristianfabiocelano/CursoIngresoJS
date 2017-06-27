/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var a = document.getElementById("numeroUno").value;

    var b = document.getElementById("numeroDos").value;

    var perro = parseInt (a);

    var gato = parseInt (b);
    
   alert ("El resultado es " + (perro + gato) );
}

function restar()
{
	var a = document.getElementById("numeroUno").value;

    var b = document.getElementById("numeroDos").value;

    var perro = parseInt (a);

    var gato = parseInt (b);
    
   alert ("El resultado es " + (perro - gato) );
}

function multiplicar()
{ 
	var a = document.getElementById("numeroUno").value;

    var b = document.getElementById("numeroDos").value;

    var perro = parseInt (a);

    var gato = parseInt (b);
    
   alert ("El resultado es " + (perro * gato) );
}

function dividir()
{
	var a = document.getElementById("numeroUno").value;

    var b = document.getElementById("numeroDos").value;

    var perro = parseInt (a);

    var gato = parseInt (b);
    
   alert ("El resultado es " + (perro / gato) );
}

