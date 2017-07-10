function Mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;

while(contador<5)
{
	contador++;
	numero=prompt("ingrese un numero");
	numero=parseInt(numero);
	while(isNaN(numero))
	{
		numero=prompt("UN NUMERO DIJE!");
		numero=parseInt(numero);
	}
	console.log(numero);
	acumulador=acumulador+numero;
}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN