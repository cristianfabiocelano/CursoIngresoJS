function Mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch (mes)
{
    case "Enero":
        alert("Que comiences bien el año");
        break;

    case "Marzo":
        alert("A Clases!");
        break;

    case "Julio":
        alert("Se vienen las vacaciones");
        break;

    case "Noviembre":
        alert("Mi Cumpleaños");
        break;

    case "Diciembre":
        alert("Felices Fiestras")
        break;

    default:
        break;
}


}//FIN DE LA FUNCIÓN