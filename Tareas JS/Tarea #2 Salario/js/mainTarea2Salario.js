window.onload = function() {

    var precioBrutoInput = document.getElementById('precioBrutoInput');

    var calcularBtn = document.getElementById('calcularBtn');

    var resultadoLbl = document.getElementById('resultadoLbl');

    var precioBrutoInput2 = document.getElementById('precioBrutoInput2')

    console.dir(calcularBtn);


    calcularBtn.onclick = onCalcularBtn;

    function onCalcularBtn() {
        var Horas = Number(precioBrutoInput.value);
        var precioXHora = Number(precioBrutoInput2.value);


        if (Horas > 40) {
            var precioAPagar = ((precioXHora * 1.5) * Horas);

            resultadoLbl.innerHTML = 'Total a pagar: $' + precioAPagar.toFixed(2);

        } else {
            var precioAPagar = (Horas * precioXHora)
            resultadoLbl.innerHTML = 'Total a pagar: $' + precioAPagar.toFixed(2);


        }

    }

}