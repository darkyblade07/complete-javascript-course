window.onload = function() {

    var precioBrutoInput = document.getElementById('precioBrutoInput');

    var calcularBtn = document.getElementById('calcularBtn');

    var resultadoLbl = document.getElementById('resultadoLbl');

    console.dir(calcularBtn);


    calcularBtn.onclick = onCalcularBtn;

    function onCalcularBtn() {
        var precioBruto = Number(precioBrutoInput.value);
        var impuesto = 0.05;
        var precioNeto = precioBruto - (precioBruto * impuesto);
        console.log('Precio Neto: ' + precioNeto.toFixed(2))
        resultadoLbl.innerHTML = 'Total ' + precioNeto.toFixed(2);
    }

}