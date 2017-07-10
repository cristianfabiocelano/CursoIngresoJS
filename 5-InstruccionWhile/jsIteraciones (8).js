function Mostrar()
{
	var positivo=0;
	var negativo=1;
	var numero= 0;
	var pregunta = confirm("quiere ingresar un numero?");
	while(pregunta == true)
	{
		numero = prompt("INGRESE UN NUMERO");
		numero = parseInt(numero);
		while(isNaN(numero))
		{
			numero = prompt("UN NUMERO DIJE!");
			numero = parseInt(numero);
		}
		if(numero>=0)
		{
			positivo= positivo + numero;
		}
		else
		{
			negativo = negativo * numero;
		}
		pregunta = confirm("quiere ingresar otro numero?");
	console.log(numero);
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN