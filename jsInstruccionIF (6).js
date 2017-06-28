function Mostrar()
{
//tomo la edad  
var age = document.getElementById("edad").value;

if (age >= 18)
{   
     alert("usted es mayor de edad");
}

else
{
    if(age <= 13)
    {
        alert("usted es un niño");
    }

    else
    {
        alert("usted es un adolescente");
    }
}

}//FIN DE LA FUNCIÓN