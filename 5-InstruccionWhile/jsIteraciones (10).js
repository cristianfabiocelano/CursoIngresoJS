//Al presionar el botón pedir números hasta que el usuario quiera, mostar://
//1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos. 4-Cantidad de negativos. 5-Cantidad de ceros.
// 6-Cantidad de números pares. 7-Promedio de positivos. 8-Promedios de negativos. 9-Diferencia entre positivos y negativos, 
//(positvos-negativos).
function Mostrar()
{
	var sumneg=0;
	var sumpos=0;
	var contadorpos=0;
	var contadorneg=0;
	var contador0=0;
	var contadornumpar=0;
	var contador=0;
	var promneg;
	var prompos;
	var difposneg;
	var contador=0;
	var numero;
	//declarar contadores y variables 
	var pregunta =confirm("quiere ingresar un numero?");
	while(pregunta ==true)
	{	
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);

		while(isNaN(numero))
		{
			numero = prompt("UN NUMERO DIJE!");
			numero = parseInt(numero);
		}
		if(numero >0)
		{
		sumpos = parseInt(sumpos);
		sumpos = sumpos += numero;
		contadorpos++;
		}
		else if(numero < 0)
		{
		sumneg = parseInt(sumneg);
		sumneg = sumneg += numero;
		contadorneg++;
		}
		else
		{
			contador0++;
		}
		if(numero%2 == 0)
		{
			contadornumpar++;
		}
		var pregunta = confirm("quiere ingresar otro numero?");
	}
	var prompos = sumpos/contadorpos;
	var promneg = sumneg/contadorneg;
	var difposneg = contadorneg-contadorpos;
	if(difposneg<0)
	{
		difposneg= difposneg*-1;
	}
	document.write("la summa de los negativos da " + sumneg + "  //  " );
	document.write("la suma de los positivos da " + sumpos + "  //  ");
	document.write("hay " + contadorpos + " numeros positivos"  + "  //  ");
	document.write("hay " + contadorneg + " numeros negativos" + "  //  " );
	document.write("hay " + contador0 + " ceros" + "  //  ");
	document.write("hay " + contadornumpar + " numeros pares" + "  //  ");
	document.write("el promedio de los positivos da " + prompos + "  //  ");
	document.write("el promedio de los negativos da " + promneg + "  //  ");
	document.write("la diferencia entre la cantidad de numero negativos y la cantidad de numeros positivos es de " + difposneg + "  //  " );



}//FIN DE LA FUNCIÓN