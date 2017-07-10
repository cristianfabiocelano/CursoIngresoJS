function Mostrar()
{

	var numero;
	var primera=true;
	var max, min;
	var pregunta = confirm("quiere ingresar un numero?");
	while(pregunta==true)
	{
		numero=prompt("ingrese un numero");
		while(isNaN(numero))
		{
			numero = prompt("UN NUMERO DIJE!");
		}
		if(primera)
		{
			max= numero;
			min= numero;
			primera = false;
		}
		else if(numero > max)
		{
			max = numero;
		}
		else
		{
			min = numero;
		}
		pregunta = confirm("quiere ingresar otro numero?")

		
	}
	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;




}//FIN DE LA FUNCIÓN