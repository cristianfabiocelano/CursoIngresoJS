/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var a = document.getElementById("numeroDividendo").value;

    var b = document.getElementById("numeroDivisor").value;

    var c = parseInt (a);

    var d = parseInt (b);

    alert ("El resto es " + (c % d));

}
