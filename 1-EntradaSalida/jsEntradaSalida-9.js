/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var a = document.getElementById("sueldo").value;

    var b = parseInt (a);

    var c = ((b * 10)/100);

    var d = (b + c); 

     document.getElementById("resultado").value = d 
}
