function Mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;


switch(mes)
{
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        alert("falta para el invierno")
        break;

    case "Julio":
    case "Agosto":
        alert("Llego el invierno")
        break;

   default:
        alert("Paso el invierno")
        break;
}
    

}//FIN DE LA FUNCIÓN