window.addEventListener('load', init, false);

function init() {
    var notaIn = document.getElementById('nota');
    var promedio = document.getElementById('promedio');
    var resultadoBTN = document.getElementById('resultado');
    resultadoBTN.onclick = onResultadoBtn;

    function onResultadoBtn() {
        var notaU = Number(notaIn);
        var promedioColegio = Number(promedio);

        var msj = '';
        if (notaU > 600 || (notaU >= 500 && promedioColegio > 80)) {

            msj = 'Bienvenido'
        } else {
            msj = 'no aprobado'
        }


    }


}