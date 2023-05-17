const precioUnitario = 3000;
const precio2Por1 = 5000;
document.getElementById("cantidadentradas").addEventListener("change",calcularTotal)

function calcularTotal(event){
    var total = 0;
    var cantidadEntradas = document.getElementById("cantidadentradas").value;
    var subtotal = (cantidadEntradas * precioUnitario);
    if(cantidadEntradas%2==0){
        total=precio2Por1*(cantidadEntradas/2);
    }else{
        total=5000*(cantidadEntradas-1)/2 + 3000;
    }
    var descuento = subtotal-total;
    if(cantidadEntradas<1){
      subtotal=0;
      total=0;
      descuento=0;
    }
    document.getElementById("subtotal").innerText = "$"+subtotal.toString();
    document.getElementById("total").innerText = "$"+total.toString();
    if (descuento==0){
        document.getElementById("descuento").innerText = "$"+descuento.toString();
    }else{
        document.getElementById("descuento").innerText = "-$"+descuento.toString();
    }
}

$(document).ready(function () {
    $.validator.addMethod("positive_integer", function (value, element) {
      // Sólo permite números enteros positivos mayores que 0
      return this.optional(element) || /^[1-9]\d*$/.test(value);
    }, "Ingresa un número entero mayor que 0");

    $('#formComprar').validate({
      rules: {
        cantidadentradas: {
          required: true,
          positive_integer: true
        }
      },
    });
  });