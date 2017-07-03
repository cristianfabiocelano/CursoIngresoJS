function Mostrar()
{
//tomo la edad  

	var age = document.getElementById("edad").value;
var estado = document.getElementById("estadoCivil").value;

if (age >= 18 && estado == "Soltero")
	{
        alert("usted es mayor y es soltero");
    }


}//FIN DE LA FUNCIÓN