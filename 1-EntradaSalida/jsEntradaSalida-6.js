/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var a = document.getElementById("numeroUno").value;

    var b = document.getElementById("numeroDos").value;

    var perro = parseInt (a);

    var gato = parseInt (b);
    
   alert ("El resultado es " + (perro + gato) );
}


