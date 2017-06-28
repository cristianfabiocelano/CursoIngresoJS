function Mostrar()
{
//tomo la edad  
var age = document.getElementById("edad").value;
var estado = document.getElementById("estadoCivil").value;

if (age < 18 && estado != "soltero")
	{
        alert("usted es muy pequeño para no ser soltero")
    }


}//FIN DE LA FUNCIÓN