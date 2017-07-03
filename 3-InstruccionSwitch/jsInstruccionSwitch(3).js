function Mostrar()
{
//tomo la edad  
var mes = document.getElementById("mes").value;

switch(mes)
{
    case "Febrero":
        alert("Este mes no tiene mas de 29 dias");
        break;

    default:
        alert("este me tiene 30 o mas dias");
        break;
}
alert(mes)
	
	


}//FIN DE LA FUNCIÓN