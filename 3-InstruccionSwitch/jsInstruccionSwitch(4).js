function Mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch(mes)
{
    case "Febrero":
        alert("este mes tiene 28 dias");
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        alert("este mes tiene 30 dias");
        break;
    default:
        alert("este mes tiene 31 dias");
        break;
}
	



}//FIN DE LA FUNCIÓN