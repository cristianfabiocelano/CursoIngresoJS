/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 

B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el 
descuento es del 30%.

C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si 
es de otra marca el descuento es del 20%.

D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se 
hace un descuento del 10 % y si es de otra marca un 5%.

E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del 
impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var precio = 35;
    precio = parseInt(precio);
    var marca = document.getElementById("Marca").value;
    var descuento;
    var cantidad = document.getElementById("Cantidad").value;
    document.getElementById("precioDescuento").value;
    if (cantidad >= 6)
    {
       descuento = (precio * 0.50)*cantidad;
       document.getElementById("precioDescuento").value = descuento; 
    }
    else if (cantidad==5)
    {
        if(marca == "ArgentinaLuz")
        {
            descuento = (precio * 0.60)*cantidad;
            document.getElementById("precioDescuento").value = descuento;
        }
        else
        {
            descuento = (precio * 0.70)*cantidad;
            document.getElementById("precioDescuento").value = descuento;
        }
    }
    else if (cantidad == 4)
    {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
        {
            descuento = (precio * 0.75)*cantidad;
            document.getElementById("precioDescuento").value = descuento;
        }
        else
        {
            descuento = (precio * 0.80)*cantidad;
            document.getElementById("precioDescuento").value = descuento;  
        }
    }
    else if (cantidad == 3)
    {
        if (marca == "ArgentinaLuz")
        {
            descuento = (precio * 0.85)* cantidad;
            document.getElementById("precioDescuento").value = descuento;
        }
        else if ( marca == "FelipeLamparas")
        {
            descuento = (precio * 0.90)*cantidad;
            document.getElementById("precioDescuento").value = descuento;
        }
        else
        {
            descuento = (precio * 0.95)*cantidad;
            document.getElementById("precioDescuento").value = descuento;
        }
    }
    else
    {
        descuento =  precio * cantidad
        document.getElementById("precioDescuento").value = descuento;
    }
    if(descuento>120)
    {
        var descuento2 = descuento*1.10;
        var recargo =descuento2 - descuento;
        document.getElementById("precioDescuento").value = descuento2;
        alert("usted pago " + recargo + " de IIBB")
    }
}

