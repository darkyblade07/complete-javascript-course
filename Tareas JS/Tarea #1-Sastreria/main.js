
   window.onload = function(){
    var btn = document.getElementById('btn');

    function calcularPrecio(){
        var personas = Number(document.getElementById('personas').value);
        var tela = Number(document.getElementById('tela').value);
        var precio = 3550;
        var total = document.getElementById('resultadoLbl');

        var operacion = personas*(tela*3550);

        total.innerHTML = `El total es: `+operacion;
    }

    btn.addEventListener('click',calcularPrecio);
}

