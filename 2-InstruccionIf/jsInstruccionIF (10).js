function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var num = Math.floor (Math.random() * (10 - 1) + 1);

if (num >= 9)
{
	alert(num + " EXCELENTE");
}
else if (num >= 4)
{
		alert (num + " APROBO");
	}

	else
	{
		alert(num + " mejor suerte la proxima");
	}


}//FIN DE LA FUNCIÓN