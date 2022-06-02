window.onload = function() {

    var precioBrutoInput = document.getElementById('precioBrutoInput');

    var calcularBtn = document.getElementById('calcularBtn');
    var calcularBtn2 = document.getElementById('calcularBtn2');


    var resultadoLbl = document.getElementById('resultadoLbl');

    var precioBrutoInput2 = document.getElementById('precioBrutoInput2')

    console.dir(calcularBtn);
    console.dir(calcularBtn2);


    calcularBtn.onclick = onCalcularBtn;

    calcularBtn2.onclick = onCalcularBtn2;

    function onCalcularBtn() {
        var numero1 = Number(precioBrutoInput.value);
        var numero2 = Number(precioBrutoInput2.value);

        resultadoLbl.innerHTML = 'Maximo:' +
            Math.max(numero1, numero2);



    }



    function onCalcularBtn2() {
        var numero1 = Number(precioBrutoInput.value);
        var numero2 = Number(precioBrutoInput2.value);

        resultadoLbl.innerHTML = 'Minimo:' +
            Math.min(numero1, numero2);


    }

}