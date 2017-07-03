function Mostrar()
{
//tomo la edad  
var age;

 age= document.getElementById("edad").value;

 if(age > 13 && age <= 17)
{
 	alert("usted es un adolescente");
}

else
{
	alert("usted no es adolescente");

}
}//FIN DE LA FUNCIÓN