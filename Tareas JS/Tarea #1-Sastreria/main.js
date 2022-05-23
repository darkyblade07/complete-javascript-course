window.onload(){

    var cantidadDePersonasIn = document.getElementById('cantidadDePersonasIn')
    var cantidadDeTelasPorPersonasIn = document.getElementById('cantidadDeTelasPorPersonasIn');
    var calcularBtn = document.getElementById('calcularBtn');
    var resultadoLbl = document.getElementById('resultadoLbl');

calcularBtn.onclick=calcularBtn;



function calcularBtn (){
var cantidadDePersonas=Number(cantidadDeTelasPorPersonasIn.value);
var cantidadDeTelasPorPersonasIn=Number(cantidadDeTelasPorPersonasIn.value);
var precioDeLaTela=3550;
var precioFinal= (precioDeLaTela*cantidadDeTelasPorPersonasIn);
resultadoLbl.innerHTML='Precio final: ' +precioFinal.toFixed(2);


}

}