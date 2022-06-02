window.onload = function() {

    var precioBrutoInput = document.getElementById('precioBrutoInput');

    var calcularBtn = document.getElementById('calcularBtn');

    var resultadoLbl = document.getElementById('resultadoLbl');

    var precioBrutoInput2 = document.getElementById('precioBrutoInput2')

    console.dir(calcularBtn);


    calcularBtn.onclick = onCalcularBtn;

    function onCalcularBtn() {
        var precioBruto = Number(precioBrutoInput.value);
        var tipoDeCliente = Number(precioBrutoInput2.value);
        var total = precioBruto * 100;
        var promo = 0.05;
        var promoFrec = 0.10;

        if (tipoDeCliente == 1) {
            var precioNeto = total - (total * promo);
            resultadoLbl.innerHTML = 'Total de estadia: $' + precioNeto.toFixed(2);

        } else if (tipoDeCliente == 2) {
            var precioNeto = total - (total * promoFrec);
            resultadoLbl.innerHTML = 'Total de estadia: $' + precioNeto.toFixed(2);

        } else {
            resultadoLbl.innerHTML = 'Digite tipo de cliente valido';

        }

    }

}