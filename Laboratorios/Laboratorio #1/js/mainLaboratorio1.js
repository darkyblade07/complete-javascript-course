window.onload = function() {

    var clearBtn = document.getElementById('clearBtn');
    var sumBtn = document.getElementById('sumBtn');
    var resBtn = document.getElementById('resBtn');
    var multBtn = document.getElementById('multBtn');
    var divBtn = document.getElementById('divBtn');
    var numero1 = document.getElementById('numero1');
    var numero2 = document.getElementById('numero2');
    var resultadoLbl = document.getElementById('resultadoLbl');



    console.dir(clearBtn);
    console.dir(sumBtn);
    console.dir(resBtn);
    console.dir(multBtn);
    console.dir(divBtn);



    clearBtn.onclick = onclearBtn;
    sumBtn.onclick = onsumBtn;
    resBtn.onclick = onresBtn;
    multBtn.onclick = onmultBtn;
    divBtn.onclick = ondivBtn;


    /**
     * The function onCalcularBtn() is called when the user clicks the button. The function gets the
     * values from the two input fields, converts them to numbers, and then displays the larger of the
     * two numbers in the result label.
     */
    function onclearBtn() {
        var numeroUno = Number(numero1.value);
        var numeroDos = Number(numero2.value);

        console.log('Numeros:' + numeroUno + numeroDos);


    }



    function onsumBtn() {
        var numeroUno = Number(numero1.value);
        var numeroDos = Number(numero2.value);

        resultadoLbl.innerHTML = 'Maximo:' +
            Math.max(numeroUno, numeroDos);


    }

    function ondivBtn() {
        var numeroUno = Number(numero1.value);
        var numeroDos = Number(numero2.value);

        resultadoLbl.innerHTML = 'Maximo:' +
            Math.max(numeroUno, numeroDos);


    }

    function onresBtn() {
        var numeroUno = Number(numero1.value);
        var numeroDos = Number(numero2.value);

        resultadoLbl.innerHTML = 'Maximo:' +
            Math.max(numeroUno, numeroDos);


    }

    function onmultBtn() {
        var numeroUno = Number(numero1.value);
        var numeroDos = Number(numero2.value);

        resultadoLbl.innerHTML = 'Maximo:' +
            Math.max(numeroUno, numeroDos);

    }

}