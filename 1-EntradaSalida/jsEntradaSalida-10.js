/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var a = document.getElementById("importe").value;

    var b = parseInt(a);

    var c = ((b * 25)/100);

    var d = (b - c);

    document.getElementById("resultado").value = d;

}
