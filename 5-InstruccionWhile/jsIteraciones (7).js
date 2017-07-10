function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var pregunta = confirm("quiere ingresar un numero?");
	while(pregunta == true)
	{
		contador ++;
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);
		while(isNaN(numero))
	{
		numero=prompt("UN NUMERO DIJE!");
		numero=parseInt(numero);
	}
	 pregunta = confirm("quiere ingresar otro numero?");
	console.log(numero);
	acumulador=acumulador+numero;

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN